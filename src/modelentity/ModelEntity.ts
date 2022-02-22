import {Knex} from "knex";
import {Model} from "objection";

export class ModelEntity extends Model {
    static tableName: string;
    static createSchemaDDL: (knex:Knex) => Promise<void>;
    static dropSchemaDDL: (knex:Knex) => Promise<void>;
}
