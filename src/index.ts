import consoleStamp from "console-stamp";
consoleStamp(console);

import {getModelEntityTypes} from './model';
import {KnexEndpoint} from "./endpoint/KnexEndpoint";

import express from 'express';

const modelEntities = getModelEntityTypes();
const knexEndpoint = new KnexEndpoint(modelEntities);

const app = express();
const routes = knexEndpoint.setupCreateModelRoutes();

app.use('/', routes);

const server = app.listen(process.env.LISTEN_PORT, () => {
    // @ts-ignore
    console.info("Knex Test app listening at http://%s", server?.address()?.address, server?.address()?.port)
})
