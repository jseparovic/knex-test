
Typical Sample Output:

```
[root@master1 knex-test]# ktlkt
yarn run v1.22.17
$ node dist/tsc
[22.02.2022 12:41.47.799] [INFO]  Knex Test app listening at http://:: 80
[22.02.2022 12:42.13.544] [DEBUG] Schema table1 Initialized
[22.02.2022 12:42.13.595] [DEBUG] Schema table2 Initialized
[22.02.2022 12:42.13.645] [DEBUG] Schema table3 Initialized
[22.02.2022 12:42.13.695] [DEBUG] Schema table4 Initialized
[22.02.2022 12:42.13.744] [DEBUG] Schema table5 Initialized
[22.02.2022 12:42.13.799] [DEBUG] Schema table6 Initialized
[22.02.2022 12:42.13.871] [ERROR] Error Creating Schema table7
Error: UNKNOWN_CODE_PLEASE_REPORT: target: test.-.primary: vttablet: rpc error: code = Canceled desc = EOF (errno 2013) (sqlstate HY000) (CallerID: test): Sql: "CREATE TABLE `table7` (\n    PRIMARY KEY(id),\n    `id` VARCHAR(256) NOT NULL,\n    `created` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),\n    `updated` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),\n    `result` VARCHAR(256),\n    `message` text,\n    `status` VARCHAR(256) DEFAULT 'Inactive',\n    `inputData` longtext,\n    `outputData` longtext\n) ENGINE=InnoDB DEFAULT CHARSET=utf8", BindVars: {}
    at Query.Sequence._packetToError (/app/node_modules/mysql/lib/protocol/sequences/Sequence.js:47:14)
    at Query.ErrorPacket (/app/node_modules/mysql/lib/protocol/sequences/Query.js:79:18)
    at Protocol._parsePacket (/app/node_modules/mysql/lib/protocol/Protocol.js:291:23)
    at Parser._parsePacket (/app/node_modules/mysql/lib/protocol/Parser.js:433:10)
    at Parser.write (/app/node_modules/mysql/lib/protocol/Parser.js:43:10)
    at Protocol.write (/app/node_modules/mysql/lib/protocol/Protocol.js:38:16)
    at Socket.<anonymous> (/app/node_modules/mysql/lib/Connection.js:88:28)
    at Socket.<anonymous> (/app/node_modules/mysql/lib/Connection.js:526:10)
    at Socket.emit (node:events:390:28)
    at addChunk (node:internal/streams/readable:315:12)
    --------------------
    at Protocol._enqueue (/app/node_modules/mysql/lib/protocol/Protocol.js:144:48)
    at Connection.query (/app/node_modules/mysql/lib/Connection.js:198:25)
    at /app/node_modules/knex/lib/dialects/mysql/index.js:132:18
    at new Promise (<anonymous>)
    at Client_MySQL._query (/app/node_modules/knex/lib/dialects/mysql/index.js:126:12)
    at executeQuery (/app/node_modules/knex/lib/execution/internal/query-executioner.js:37:17)
    at Client_MySQL.query (/app/node_modules/knex/lib/client.js:146:12)
    at Runner.query (/app/node_modules/knex/lib/execution/runner.js:130:36)
    at ensureConnectionCallback (/app/node_modules/knex/lib/execution/internal/ensure-connection-callback.js:13:17)
    at Runner.ensureConnection (/app/node_modules/knex/lib/execution/runner.js:307:20)
[22.02.2022 12:42.25.876] [ERROR] Error Creating Schema table7
Error: ER_OPTION_PREVENTS_STATEMENT: target: test.-.primary: vttablet: rpc error: code = Code(17) desc = The MySQL server is running with the --read-only option so it cannot execute this statement (errno 1290) (sqlstate HY000) (CallerID: test): Sql: "CREATE TABLE `table7` (\n    PRIMARY KEY(id),\n    `id` VARCHAR(256) NOT NULL,\n    `created` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),\n    `updated` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),\n    `result` VARCHAR(256),\n    `message` text,\n    `status` VARCHAR(256) DEFAULT 'Inactive',\n    `inputData` longtext,\n    `outputData` longtext\n) ENGINE=InnoDB DEFAULT CHARSET=utf8", BindVars: {}
    at Query.Sequence._packetToError (/app/node_modules/mysql/lib/protocol/sequences/Sequence.js:47:14)
    at Query.ErrorPacket (/app/node_modules/mysql/lib/protocol/sequences/Query.js:79:18)
    at Protocol._parsePacket (/app/node_modules/mysql/lib/protocol/Protocol.js:291:23)
    at Parser._parsePacket (/app/node_modules/mysql/lib/protocol/Parser.js:433:10)
    at Parser.write (/app/node_modules/mysql/lib/protocol/Parser.js:43:10)
    at Protocol.write (/app/node_modules/mysql/lib/protocol/Protocol.js:38:16)
    at Socket.<anonymous> (/app/node_modules/mysql/lib/Connection.js:88:28)
    at Socket.<anonymous> (/app/node_modules/mysql/lib/Connection.js:526:10)
    at Socket.emit (node:events:390:28)
    at addChunk (node:internal/streams/readable:315:12)
    --------------------
    at Protocol._enqueue (/app/node_modules/mysql/lib/protocol/Protocol.js:144:48)
    at Connection.query (/app/node_modules/mysql/lib/Connection.js:198:25)
    at /app/node_modules/knex/lib/dialects/mysql/index.js:132:18
    at new Promise (<anonymous>)
    at Client_MySQL._query (/app/node_modules/knex/lib/dialects/mysql/index.js:126:12)
    at executeQuery (/app/node_modules/knex/lib/execution/internal/query-executioner.js:37:17)
    at Client_MySQL.query (/app/node_modules/knex/lib/client.js:146:12)
    at Runner.query (/app/node_modules/knex/lib/execution/runner.js:130:36)
    at ensureConnectionCallback (/app/node_modules/knex/lib/execution/internal/ensure-connection-callback.js:13:17)
    at Runner.ensureConnection (/app/node_modules/knex/lib/execution/runner.js:307:20)
[22.02.2022 12:42.27.882] [WARN]  Table Already Exists table7 :
CREATE TABLE `table7` (
    PRIMARY KEY(id),
    `id` VARCHAR(256) NOT NULL,
    `created` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    `updated` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
    `result` VARCHAR(256),
    `message` text,
    `status` VARCHAR(256) DEFAULT 'Inactive',
    `inputData` longtext,
    `outputData` longtext
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
 - ER_TABLE_EXISTS_ERROR: target: test.-.primary: vttablet: rpc error: code = AlreadyExists desc = Table 'table7' already exists (errno 1050) (sqlstate 42S01) (CallerID: test): Sql: "CREATE TABLE `table7` (\n    PRIMARY KEY(id),\n    `id` VARCHAR(256) NOT NULL,\n    `created` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),\n    `updated` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),\n    `result` VARCHAR(256),\n    `message` text,\n    `status` VARCHAR(256) DEFAULT 'Inactive',\n    `inputData` longtext,\n    `outputData` longtext\n) ENGINE=InnoDB DEFAULT CHARSET=utf8", BindVars: {}
[22.02.2022 12:42.27.939] [DEBUG] Schema table8 Initialized
[22.02.2022 12:42.27.988] [DEBUG] Schema table9 Initialized
[22.02.2022 12:42.28.037] [DEBUG] Schema table10 Initialized
[22.02.2022 12:42.28.086] [DEBUG] Schema table11 Initialized
[22.02.2022 12:42.28.151] [DEBUG] Schema table12 Initialized
[22.02.2022 12:42.28.205] [DEBUG] Schema table13 Initialized
[22.02.2022 12:42.28.254] [DEBUG] Schema table14 Initialized
[22.02.2022 12:42.28.303] [DEBUG] Schema table15 Initialized
[22.02.2022 12:42.28.353] [DEBUG] Schema table16 Initialized
[22.02.2022 12:42.28.403] [DEBUG] Schema table17 Initialized
[22.02.2022 12:42.28.452] [DEBUG] Schema table18 Initialized
[22.02.2022 12:42.28.502] [DEBUG] Schema table19 Initialized
[22.02.2022 12:42.28.552] [DEBUG] Schema table20 Initialized
[22.02.2022 12:42.28.615] [DEBUG] Schema table21 Initialized
[22.02.2022 12:42.28.704] [DEBUG] Schema table22 Initialized
[22.02.2022 12:42.28.705] [ERROR] Error Creating Schema table23
Error: ER_UNKNOWN_ERROR: target: test.-.primary: primary is not serving, there is a reparent operation in progress
    at Query.Sequence._packetToError (/app/node_modules/mysql/lib/protocol/sequences/Sequence.js:47:14)
    at Query.ErrorPacket (/app/node_modules/mysql/lib/protocol/sequences/Query.js:79:18)
    at Protocol._parsePacket (/app/node_modules/mysql/lib/protocol/Protocol.js:291:23)
    at Parser._parsePacket (/app/node_modules/mysql/lib/protocol/Parser.js:433:10)
    at Parser.write (/app/node_modules/mysql/lib/protocol/Parser.js:43:10)
    at Protocol.write (/app/node_modules/mysql/lib/protocol/Protocol.js:38:16)
    at Socket.<anonymous> (/app/node_modules/mysql/lib/Connection.js:88:28)
    at Socket.<anonymous> (/app/node_modules/mysql/lib/Connection.js:526:10)
    at Socket.emit (node:events:390:28)
    at addChunk (node:internal/streams/readable:315:12)
    --------------------
    at Protocol._enqueue (/app/node_modules/mysql/lib/protocol/Protocol.js:144:48)
    at Connection.query (/app/node_modules/mysql/lib/Connection.js:198:25)
    at /app/node_modules/knex/lib/dialects/mysql/index.js:132:18
    at new Promise (<anonymous>)
    at Client_MySQL._query (/app/node_modules/knex/lib/dialects/mysql/index.js:126:12)
    at executeQuery (/app/node_modules/knex/lib/execution/internal/query-executioner.js:37:17)
    at Client_MySQL.query (/app/node_modules/knex/lib/client.js:146:12)
    at Runner.query (/app/node_modules/knex/lib/execution/runner.js:130:36)
    at ensureConnectionCallback (/app/node_modules/knex/lib/execution/internal/ensure-connection-callback.js:13:17)
    at Runner.ensureConnection (/app/node_modules/knex/lib/execution/runner.js:307:20)
[22.02.2022 12:42.30.709] [ERROR] Error Creating Schema table23
Error: ER_OPTION_PREVENTS_STATEMENT: target: test.-.primary: vttablet: rpc error: code = Code(17) desc = The MySQL server is running with the --read-only option so it cannot execute this statement (errno 1290) (sqlstate HY000) (CallerID: test): Sql: "CREATE TABLE `table23` (\n    PRIMARY KEY(id),\n    `id` VARCHAR(256) NOT NULL,\n    `created` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),\n    `updated` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),\n    `result` VARCHAR(256),\n    `message` text,\n    `status` VARCHAR(256) DEFAULT 'Inactive',\n    `inputData` longtext,\n    `outputData` longtext\n) ENGINE=InnoDB DEFAULT CHARSET=utf8", BindVars: {}
    at Query.Sequence._packetToError (/app/node_modules/mysql/lib/protocol/sequences/Sequence.js:47:14)
    at Query.ErrorPacket (/app/node_modules/mysql/lib/protocol/sequences/Query.js:79:18)
    at Protocol._parsePacket (/app/node_modules/mysql/lib/protocol/Protocol.js:291:23)
    at Parser._parsePacket (/app/node_modules/mysql/lib/protocol/Parser.js:433:10)
    at Parser.write (/app/node_modules/mysql/lib/protocol/Parser.js:43:10)
    at Protocol.write (/app/node_modules/mysql/lib/protocol/Protocol.js:38:16)
    at Socket.<anonymous> (/app/node_modules/mysql/lib/Connection.js:88:28)
    at Socket.<anonymous> (/app/node_modules/mysql/lib/Connection.js:526:10)
    at Socket.emit (node:events:390:28)
    at addChunk (node:internal/streams/readable:315:12)
    --------------------
    at Protocol._enqueue (/app/node_modules/mysql/lib/protocol/Protocol.js:144:48)
    at Connection.query (/app/node_modules/mysql/lib/Connection.js:198:25)
    at /app/node_modules/knex/lib/dialects/mysql/index.js:132:18
    at new Promise (<anonymous>)
    at Client_MySQL._query (/app/node_modules/knex/lib/dialects/mysql/index.js:126:12)
    at executeQuery (/app/node_modules/knex/lib/execution/internal/query-executioner.js:37:17)
    at Client_MySQL.query (/app/node_modules/knex/lib/client.js:146:12)
    at Runner.query (/app/node_modules/knex/lib/execution/runner.js:130:36)
    at ensureConnectionCallback (/app/node_modules/knex/lib/execution/internal/ensure-connection-callback.js:13:17)
    at Runner.ensureConnection (/app/node_modules/knex/lib/execution/runner.js:307:20)
[22.02.2022 12:42.32.713] [ERROR] Error Creating Schema table23
Error: ER_OPTION_PREVENTS_STATEMENT: target: test.-.primary: vttablet: rpc error: code = Code(17) desc = The MySQL server is running with the --read-only option so it cannot execute this statement (errno 1290) (sqlstate HY000) (CallerID: test): Sql: "CREATE TABLE `table23` (\n    PRIMARY KEY(id),\n    `id` VARCHAR(256) NOT NULL,\n    `created` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),\n    `updated` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),\n    `result` VARCHAR(256),\n    `message` text,\n    `status` VARCHAR(256) DEFAULT 'Inactive',\n    `inputData` longtext,\n    `outputData` longtext\n) ENGINE=InnoDB DEFAULT CHARSET=utf8", BindVars: {}
    at Query.Sequence._packetToError (/app/node_modules/mysql/lib/protocol/sequences/Sequence.js:47:14)
    at Query.ErrorPacket (/app/node_modules/mysql/lib/protocol/sequences/Query.js:79:18)
    at Protocol._parsePacket (/app/node_modules/mysql/lib/protocol/Protocol.js:291:23)
    at Parser._parsePacket (/app/node_modules/mysql/lib/protocol/Parser.js:433:10)
    at Parser.write (/app/node_modules/mysql/lib/protocol/Parser.js:43:10)
    at Protocol.write (/app/node_modules/mysql/lib/protocol/Protocol.js:38:16)
    at Socket.<anonymous> (/app/node_modules/mysql/lib/Connection.js:88:28)
    at Socket.<anonymous> (/app/node_modules/mysql/lib/Connection.js:526:10)
    at Socket.emit (node:events:390:28)
    at addChunk (node:internal/streams/readable:315:12)
    --------------------
    at Protocol._enqueue (/app/node_modules/mysql/lib/protocol/Protocol.js:144:48)
    at Connection.query (/app/node_modules/mysql/lib/Connection.js:198:25)
    at /app/node_modules/knex/lib/dialects/mysql/index.js:132:18
    at new Promise (<anonymous>)
    at Client_MySQL._query (/app/node_modules/knex/lib/dialects/mysql/index.js:126:12)
    at executeQuery (/app/node_modules/knex/lib/execution/internal/query-executioner.js:37:17)
    at Client_MySQL.query (/app/node_modules/knex/lib/client.js:146:12)
    at Runner.query (/app/node_modules/knex/lib/execution/runner.js:130:36)
    at ensureConnectionCallback (/app/node_modules/knex/lib/execution/internal/ensure-connection-callback.js:13:17)
    at Runner.ensureConnection (/app/node_modules/knex/lib/execution/runner.js:307:20)
[22.02.2022 12:42.34.717] [ERROR] Error Creating Schema table23
Error: ER_OPTION_PREVENTS_STATEMENT: target: test.-.primary: vttablet: rpc error: code = Code(17) desc = The MySQL server is running with the --read-only option so it cannot execute this statement (errno 1290) (sqlstate HY000) (CallerID: test): Sql: "CREATE TABLE `table23` (\n    PRIMARY KEY(id),\n    `id` VARCHAR(256) NOT NULL,\n    `created` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),\n    `updated` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),\n    `result` VARCHAR(256),\n    `message` text,\n    `status` VARCHAR(256) DEFAULT 'Inactive',\n    `inputData` longtext,\n    `outputData` longtext\n) ENGINE=InnoDB DEFAULT CHARSET=utf8", BindVars: {}
    at Query.Sequence._packetToError (/app/node_modules/mysql/lib/protocol/sequences/Sequence.js:47:14)
    at Query.ErrorPacket (/app/node_modules/mysql/lib/protocol/sequences/Query.js:79:18)
    at Protocol._parsePacket (/app/node_modules/mysql/lib/protocol/Protocol.js:291:23)
    at Parser._parsePacket (/app/node_modules/mysql/lib/protocol/Parser.js:433:10)
    at Parser.write (/app/node_modules/mysql/lib/protocol/Parser.js:43:10)
    at Protocol.write (/app/node_modules/mysql/lib/protocol/Protocol.js:38:16)
    at Socket.<anonymous> (/app/node_modules/mysql/lib/Connection.js:88:28)
    at Socket.<anonymous> (/app/node_modules/mysql/lib/Connection.js:526:10)
    at Socket.emit (node:events:390:28)
    at addChunk (node:internal/streams/readable:315:12)
    --------------------
    at Protocol._enqueue (/app/node_modules/mysql/lib/protocol/Protocol.js:144:48)
    at Connection.query (/app/node_modules/mysql/lib/Connection.js:198:25)
    at /app/node_modules/knex/lib/dialects/mysql/index.js:132:18
    at new Promise (<anonymous>)
    at Client_MySQL._query (/app/node_modules/knex/lib/dialects/mysql/index.js:126:12)
    at executeQuery (/app/node_modules/knex/lib/execution/internal/query-executioner.js:37:17)
    at Client_MySQL.query (/app/node_modules/knex/lib/client.js:146:12)
    at Runner.query (/app/node_modules/knex/lib/execution/runner.js:130:36)
    at ensureConnectionCallback (/app/node_modules/knex/lib/execution/internal/ensure-connection-callback.js:13:17)
    at Runner.ensureConnection (/app/node_modules/knex/lib/execution/runner.js:307:20)
[22.02.2022 12:42.36.721] [ERROR] Error Creating Schema table23
Error: ER_OPTION_PREVENTS_STATEMENT: target: test.-.primary: vttablet: rpc error: code = Code(17) desc = The MySQL server is running with the --read-only option so it cannot execute this statement (errno 1290) (sqlstate HY000) (CallerID: test): Sql: "CREATE TABLE `table23` (\n    PRIMARY KEY(id),\n    `id` VARCHAR(256) NOT NULL,\n    `created` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),\n    `updated` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),\n    `result` VARCHAR(256),\n    `message` text,\n    `status` VARCHAR(256) DEFAULT 'Inactive',\n    `inputData` longtext,\n    `outputData` longtext\n) ENGINE=InnoDB DEFAULT CHARSET=utf8", BindVars: {}
    at Query.Sequence._packetToError (/app/node_modules/mysql/lib/protocol/sequences/Sequence.js:47:14)
    at Query.ErrorPacket (/app/node_modules/mysql/lib/protocol/sequences/Query.js:79:18)
    at Protocol._parsePacket (/app/node_modules/mysql/lib/protocol/Protocol.js:291:23)
    at Parser._parsePacket (/app/node_modules/mysql/lib/protocol/Parser.js:433:10)
    at Parser.write (/app/node_modules/mysql/lib/protocol/Parser.js:43:10)
    at Protocol.write (/app/node_modules/mysql/lib/protocol/Protocol.js:38:16)
    at Socket.<anonymous> (/app/node_modules/mysql/lib/Connection.js:88:28)
    at Socket.<anonymous> (/app/node_modules/mysql/lib/Connection.js:526:10)
    at Socket.emit (node:events:390:28)
    at addChunk (node:internal/streams/readable:315:12)
    --------------------
    at Protocol._enqueue (/app/node_modules/mysql/lib/protocol/Protocol.js:144:48)
    at Connection.query (/app/node_modules/mysql/lib/Connection.js:198:25)
    at /app/node_modules/knex/lib/dialects/mysql/index.js:132:18
    at new Promise (<anonymous>)
    at Client_MySQL._query (/app/node_modules/knex/lib/dialects/mysql/index.js:126:12)
    at executeQuery (/app/node_modules/knex/lib/execution/internal/query-executioner.js:37:17)
    at Client_MySQL.query (/app/node_modules/knex/lib/client.js:146:12)
    at Runner.query (/app/node_modules/knex/lib/execution/runner.js:130:36)
    at ensureConnectionCallback (/app/node_modules/knex/lib/execution/internal/ensure-connection-callback.js:13:17)
    at Runner.ensureConnection (/app/node_modules/knex/lib/execution/runner.js:307:20)
[22.02.2022 12:42.38.725] [ERROR] Error Creating Schema table23
Error: ER_OPTION_PREVENTS_STATEMENT: target: test.-.primary: vttablet: rpc error: code = Code(17) desc = The MySQL server is running with the --read-only option so it cannot execute this statement (errno 1290) (sqlstate HY000) (CallerID: test): Sql: "CREATE TABLE `table23` (\n    PRIMARY KEY(id),\n    `id` VARCHAR(256) NOT NULL,\n    `created` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),\n    `updated` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),\n    `result` VARCHAR(256),\n    `message` text,\n    `status` VARCHAR(256) DEFAULT 'Inactive',\n    `inputData` longtext,\n    `outputData` longtext\n) ENGINE=InnoDB DEFAULT CHARSET=utf8", BindVars: {}
    at Query.Sequence._packetToError (/app/node_modules/mysql/lib/protocol/sequences/Sequence.js:47:14)
    at Query.ErrorPacket (/app/node_modules/mysql/lib/protocol/sequences/Query.js:79:18)
    at Protocol._parsePacket (/app/node_modules/mysql/lib/protocol/Protocol.js:291:23)
    at Parser._parsePacket (/app/node_modules/mysql/lib/protocol/Parser.js:433:10)
    at Parser.write (/app/node_modules/mysql/lib/protocol/Parser.js:43:10)
    at Protocol.write (/app/node_modules/mysql/lib/protocol/Protocol.js:38:16)
    at Socket.<anonymous> (/app/node_modules/mysql/lib/Connection.js:88:28)
    at Socket.<anonymous> (/app/node_modules/mysql/lib/Connection.js:526:10)
    at Socket.emit (node:events:390:28)
    at addChunk (node:internal/streams/readable:315:12)
    --------------------
    at Protocol._enqueue (/app/node_modules/mysql/lib/protocol/Protocol.js:144:48)
    at Connection.query (/app/node_modules/mysql/lib/Connection.js:198:25)
    at /app/node_modules/knex/lib/dialects/mysql/index.js:132:18
    at new Promise (<anonymous>)
    at Client_MySQL._query (/app/node_modules/knex/lib/dialects/mysql/index.js:126:12)
    at executeQuery (/app/node_modules/knex/lib/execution/internal/query-executioner.js:37:17)
    at Client_MySQL.query (/app/node_modules/knex/lib/client.js:146:12)
    at Runner.query (/app/node_modules/knex/lib/execution/runner.js:130:36)
    at ensureConnectionCallback (/app/node_modules/knex/lib/execution/internal/ensure-connection-callback.js:13:17)
    at Runner.ensureConnection (/app/node_modules/knex/lib/execution/runner.js:307:20)
[22.02.2022 12:42.40.729] [ERROR] Error Creating Schema table23
Error: ER_OPTION_PREVENTS_STATEMENT: target: test.-.primary: vttablet: rpc error: code = Code(17) desc = The MySQL server is running with the --read-only option so it cannot execute this statement (errno 1290) (sqlstate HY000) (CallerID: test): Sql: "CREATE TABLE `table23` (\n    PRIMARY KEY(id),\n    `id` VARCHAR(256) NOT NULL,\n    `created` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),\n    `updated` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),\n    `result` VARCHAR(256),\n    `message` text,\n    `status` VARCHAR(256) DEFAULT 'Inactive',\n    `inputData` longtext,\n    `outputData` longtext\n) ENGINE=InnoDB DEFAULT CHARSET=utf8", BindVars: {}
    at Query.Sequence._packetToError (/app/node_modules/mysql/lib/protocol/sequences/Sequence.js:47:14)
    at Query.ErrorPacket (/app/node_modules/mysql/lib/protocol/sequences/Query.js:79:18)
    at Protocol._parsePacket (/app/node_modules/mysql/lib/protocol/Protocol.js:291:23)
    at Parser._parsePacket (/app/node_modules/mysql/lib/protocol/Parser.js:433:10)
    at Parser.write (/app/node_modules/mysql/lib/protocol/Parser.js:43:10)
    at Protocol.write (/app/node_modules/mysql/lib/protocol/Protocol.js:38:16)
    at Socket.<anonymous> (/app/node_modules/mysql/lib/Connection.js:88:28)
    at Socket.<anonymous> (/app/node_modules/mysql/lib/Connection.js:526:10)
    at Socket.emit (node:events:390:28)
    at addChunk (node:internal/streams/readable:315:12)
    --------------------
    at Protocol._enqueue (/app/node_modules/mysql/lib/protocol/Protocol.js:144:48)
    at Connection.query (/app/node_modules/mysql/lib/Connection.js:198:25)
    at /app/node_modules/knex/lib/dialects/mysql/index.js:132:18
    at new Promise (<anonymous>)
    at Client_MySQL._query (/app/node_modules/knex/lib/dialects/mysql/index.js:126:12)
    at executeQuery (/app/node_modules/knex/lib/execution/internal/query-executioner.js:37:17)
    at Client_MySQL.query (/app/node_modules/knex/lib/client.js:146:12)
    at Runner.query (/app/node_modules/knex/lib/execution/runner.js:130:36)
    at ensureConnectionCallback (/app/node_modules/knex/lib/execution/internal/ensure-connection-callback.js:13:17)
    at Runner.ensureConnection (/app/node_modules/knex/lib/execution/runner.js:307:20)
[22.02.2022 12:42.42.732] [ERROR] Error Creating Schema table23
Error: ER_OPTION_PREVENTS_STATEMENT: target: test.-.primary: vttablet: rpc error: code = Code(17) desc = The MySQL server is running with the --read-only option so it cannot execute this statement (errno 1290) (sqlstate HY000) (CallerID: test): Sql: "CREATE TABLE `table23` (\n    PRIMARY KEY(id),\n    `id` VARCHAR(256) NOT NULL,\n    `created` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),\n    `updated` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),\n    `result` VARCHAR(256),\n    `message` text,\n    `status` VARCHAR(256) DEFAULT 'Inactive',\n    `inputData` longtext,\n    `outputData` longtext\n) ENGINE=InnoDB DEFAULT CHARSET=utf8", BindVars: {}
    at Query.Sequence._packetToError (/app/node_modules/mysql/lib/protocol/sequences/Sequence.js:47:14)
    at Query.ErrorPacket (/app/node_modules/mysql/lib/protocol/sequences/Query.js:79:18)
    at Protocol._parsePacket (/app/node_modules/mysql/lib/protocol/Protocol.js:291:23)
    at Parser._parsePacket (/app/node_modules/mysql/lib/protocol/Parser.js:433:10)
    at Parser.write (/app/node_modules/mysql/lib/protocol/Parser.js:43:10)
    at Protocol.write (/app/node_modules/mysql/lib/protocol/Protocol.js:38:16)
    at Socket.<anonymous> (/app/node_modules/mysql/lib/Connection.js:88:28)
    at Socket.<anonymous> (/app/node_modules/mysql/lib/Connection.js:526:10)
    at Socket.emit (node:events:390:28)
    at addChunk (node:internal/streams/readable:315:12)
    --------------------
    at Protocol._enqueue (/app/node_modules/mysql/lib/protocol/Protocol.js:144:48)
    at Connection.query (/app/node_modules/mysql/lib/Connection.js:198:25)
    at /app/node_modules/knex/lib/dialects/mysql/index.js:132:18
    at new Promise (<anonymous>)
    at Client_MySQL._query (/app/node_modules/knex/lib/dialects/mysql/index.js:126:12)
    at executeQuery (/app/node_modules/knex/lib/execution/internal/query-executioner.js:37:17)
    at Client_MySQL.query (/app/node_modules/knex/lib/client.js:146:12)
    at Runner.query (/app/node_modules/knex/lib/execution/runner.js:130:36)
    at ensureConnectionCallback (/app/node_modules/knex/lib/execution/internal/ensure-connection-callback.js:13:17)
    at Runner.ensureConnection (/app/node_modules/knex/lib/execution/runner.js:307:20)
[22.02.2022 12:42.44.736] [ERROR] Error Creating Schema table23
Error: ER_OPTION_PREVENTS_STATEMENT: target: test.-.primary: vttablet: rpc error: code = Code(17) desc = The MySQL server is running with the --read-only option so it cannot execute this statement (errno 1290) (sqlstate HY000) (CallerID: test): Sql: "CREATE TABLE `table23` (\n    PRIMARY KEY(id),\n    `id` VARCHAR(256) NOT NULL,\n    `created` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),\n    `updated` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),\n    `result` VARCHAR(256),\n    `message` text,\n    `status` VARCHAR(256) DEFAULT 'Inactive',\n    `inputData` longtext,\n    `outputData` longtext\n) ENGINE=InnoDB DEFAULT CHARSET=utf8", BindVars: {}
    at Query.Sequence._packetToError (/app/node_modules/mysql/lib/protocol/sequences/Sequence.js:47:14)
    at Query.ErrorPacket (/app/node_modules/mysql/lib/protocol/sequences/Query.js:79:18)
    at Protocol._parsePacket (/app/node_modules/mysql/lib/protocol/Protocol.js:291:23)
    at Parser._parsePacket (/app/node_modules/mysql/lib/protocol/Parser.js:433:10)
    at Parser.write (/app/node_modules/mysql/lib/protocol/Parser.js:43:10)
    at Protocol.write (/app/node_modules/mysql/lib/protocol/Protocol.js:38:16)
    at Socket.<anonymous> (/app/node_modules/mysql/lib/Connection.js:88:28)
    at Socket.<anonymous> (/app/node_modules/mysql/lib/Connection.js:526:10)
    at Socket.emit (node:events:390:28)
    at addChunk (node:internal/streams/readable:315:12)
    --------------------
    at Protocol._enqueue (/app/node_modules/mysql/lib/protocol/Protocol.js:144:48)
    at Connection.query (/app/node_modules/mysql/lib/Connection.js:198:25)
    at /app/node_modules/knex/lib/dialects/mysql/index.js:132:18
    at new Promise (<anonymous>)
    at Client_MySQL._query (/app/node_modules/knex/lib/dialects/mysql/index.js:126:12)
    at executeQuery (/app/node_modules/knex/lib/execution/internal/query-executioner.js:37:17)
    at Client_MySQL.query (/app/node_modules/knex/lib/client.js:146:12)
    at Runner.query (/app/node_modules/knex/lib/execution/runner.js:130:36)
    at ensureConnectionCallback (/app/node_modules/knex/lib/execution/internal/ensure-connection-callback.js:13:17)
    at Runner.ensureConnection (/app/node_modules/knex/lib/execution/runner.js:307:20)
[22.02.2022 12:42.46.787] [DEBUG] Schema table23 Initialized
[22.02.2022 12:42.46.836] [DEBUG] Schema table24 Initialized
[22.02.2022 12:42.46.886] [DEBUG] Schema table25 Initialized
[22.02.2022 12:42.46.935] [DEBUG] Schema table26 Initialized
[22.02.2022 12:42.46.985] [DEBUG] Schema table27 Initialized
[22.02.2022 12:42.47.051] [DEBUG] Schema table28 Initialized
[22.02.2022 12:42.47.101] [DEBUG] Schema table29 Initialized
[22.02.2022 12:42.47.151] [DEBUG] Schema table30 Initialized

```
