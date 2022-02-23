import {Router, Request, Response, NextFunction} from 'express';
const routes = Router();
import knex, {Knex} from 'knex';
import util from 'util';

import {ModelEntity} from "../modelentity/ModelEntity";

const CONNECTION_RETRY_MS = 2000;
const RETRIES = 0;

const wrapAsync = (fn: (req: Request, res: Response, next: NextFunction) => Promise<void>) => {
    return (req: Request, res: Response, next: NextFunction) => {
        fn(req, res, next).catch(next);
    };
};

const sleep = async (ms: number) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

export class KnexEndpoint {
    private readonly _model: Array<typeof ModelEntity>;
    private readonly _knex: Knex;

    constructor(model: Array<typeof ModelEntity>) {
        this._model = model;
        this._knex = knex({
            client: 'mysql',
            connection: {
                host: process.env.MYSQL_HOST,
                user: process.env.MYSQL_USER,
                database: process.env.MYSQL_DATABASE,
                password: process.env.MYSQL_PASSWORD,
            }
        });
    }

    async initializeSchemaDDL(entity: typeof ModelEntity):Promise<void> {
        let retries = 0;
        let initialized = false;
        let error;
        while (!initialized && retries <= RETRIES) {
            await entity.createSchemaDDL(this._knex)
                .then(() => {
                    console.debug(util.format('Schema %s Initialized', entity.tableName));
                    initialized = true;
                })
                .catch((err: Error) => {
                    error = err;
                    if (err.message.includes('ER_TABLE_EXISTS_ERROR')) {
                        console.warn(util.format('Table Already Exists %s : %s', entity.tableName, err.message));
                        initialized = true;
                    }
                    else {
                        console.error(util.format('Error Creating Schema %s\n%s', entity.tableName, err.stack));
                    }
                });
            if (!initialized) {
                retries++;
                await sleep(CONNECTION_RETRY_MS);
            }
        }
        if (!initialized) {
            throw new Error("Could not initialize database due to " + error);
        }
    }

    async dropSchemaDDL(entity: typeof ModelEntity):Promise<void> {
        let retries = 0;
        let initialized = false;
        let error;
        while (!initialized && retries <= RETRIES) {
            await entity.dropSchemaDDL(this._knex)
                .then(() => {
                    console.debug(util.format('Schema %s Dropped', entity.tableName));
                    initialized = true;
                })
                .catch((err: Error) => {
                    error = err;
                    if (err.message.includes('ER_BAD_TABLE_ERROR')) {
                        console.warn(util.format('Table Already Dropped %s : %s', entity.tableName, err.message));
                        initialized = true;
                    }
                    else {
                        console.error(util.format('Error Dropping Schema %s\n%s', entity.tableName, err.stack));
                    }
                });
            if (!initialized) {
                retries++;
                await sleep(CONNECTION_RETRY_MS);
            }
        }
        if (!initialized) {
            throw new Error("Could not clear database due to " + error);
        }
    }

    setupCreateModelRoutes(): Router {
        routes.post('/ddl', wrapAsync(async (_req:Request, res:Response) => {
            for (const entity of this._model) {
                await this.initializeSchemaDDL(entity);
            }
            res.sendStatus(200);
        }));

        routes.delete('/ddl', wrapAsync(async (_req:Request, res:Response) => {
            for (const entity of this._model) {
                await this.dropSchemaDDL(entity);
            }
            res.sendStatus(202);
        }));

        return routes;
    }

}
