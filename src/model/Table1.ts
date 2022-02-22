import {ModelEntity} from '../modelentity/ModelEntity';
import {Knex} from 'knex';


const tableName = 'table1';

export class Table1 extends ModelEntity {
    static tableName = tableName;

    static createSchemaDDL = async (knex: Knex) => {
        const ddl = `
CREATE TABLE \`${tableName}\` (
    PRIMARY KEY(id),
    \`id\` VARCHAR(256) NOT NULL,
    \`created\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    \`updated\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
    \`result\` VARCHAR(256),
    \`message\` text,
    \`status\` VARCHAR(256) DEFAULT 'Inactive',
    \`inputData\` longtext,
    \`outputData\` longtext
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
`;
        await knex.raw(ddl);
    };

    static dropSchemaDDL = async (knex: Knex) => {
        const ddl = `DROP TABLE \`${tableName}\``;
        await knex.raw(ddl);
    };

}
