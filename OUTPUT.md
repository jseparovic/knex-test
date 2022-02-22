
Typical Sample Output:

```
Example app listening at http://:: 80
Schema table1 Initialized
Error Creating Schema table2
Error: ER_OPTION_PREVENTS_STATEMENT: target: test.-.primary: vttablet: rpc error: code = Code(17) desc = The MySQL server is running with the --read-only option so it cannot execute this statement (errno 1290) (sqlstate HY000) (CallerID: test): Sql: "CREATE TABLE `table2` (\n    PRIMARY KEY(id),\n    `id` VARCHAR(256) NOT NULL,\n    `created` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),\n    `updated` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),\n    `result` VARCHAR(256),\n    `message` text,\n    `status` VARCHAR(256) DEFAULT 'Inactive',\n    `inputData` longtext,\n    `outputData` longtext\n) ENGINE=InnoDB DEFAULT CHARSET=utf8", BindVars: {}
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
Error Creating Schema table2
Error: ER_OPTION_PREVENTS_STATEMENT: target: test.-.primary: vttablet: rpc error: code = Code(17) desc = The MySQL server is running with the --read-only option so it cannot execute this statement (errno 1290) (sqlstate HY000) (CallerID: test): Sql: "CREATE TABLE `table2` (\n    PRIMARY KEY(id),\n    `id` VARCHAR(256) NOT NULL,\n    `created` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),\n    `updated` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),\n    `result` VARCHAR(256),\n    `message` text,\n    `status` VARCHAR(256) DEFAULT 'Inactive',\n    `inputData` longtext,\n    `outputData` longtext\n) ENGINE=InnoDB DEFAULT CHARSET=utf8", BindVars: {}
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
Error Creating Schema table2
Error: ER_OPTION_PREVENTS_STATEMENT: target: test.-.primary: vttablet: rpc error: code = Code(17) desc = The MySQL server is running with the --read-only option so it cannot execute this statement (errno 1290) (sqlstate HY000) (CallerID: test): Sql: "CREATE TABLE `table2` (\n    PRIMARY KEY(id),\n    `id` VARCHAR(256) NOT NULL,\n    `created` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),\n    `updated` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),\n    `result` VARCHAR(256),\n    `message` text,\n    `status` VARCHAR(256) DEFAULT 'Inactive',\n    `inputData` longtext,\n    `outputData` longtext\n) ENGINE=InnoDB DEFAULT CHARSET=utf8", BindVars: {}
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
Error Creating Schema table2
Error: ER_OPTION_PREVENTS_STATEMENT: target: test.-.primary: vttablet: rpc error: code = Code(17) desc = The MySQL server is running with the --read-only option so it cannot execute this statement (errno 1290) (sqlstate HY000) (CallerID: test): Sql: "CREATE TABLE `table2` (\n    PRIMARY KEY(id),\n    `id` VARCHAR(256) NOT NULL,\n    `created` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),\n    `updated` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),\n    `result` VARCHAR(256),\n    `message` text,\n    `status` VARCHAR(256) DEFAULT 'Inactive',\n    `inputData` longtext,\n    `outputData` longtext\n) ENGINE=InnoDB DEFAULT CHARSET=utf8", BindVars: {}
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
Error Creating Schema table2
Error: ER_OPTION_PREVENTS_STATEMENT: target: test.-.primary: vttablet: rpc error: code = Code(17) desc = The MySQL server is running with the --read-only option so it cannot execute this statement (errno 1290) (sqlstate HY000) (CallerID: test): Sql: "CREATE TABLE `table2` (\n    PRIMARY KEY(id),\n    `id` VARCHAR(256) NOT NULL,\n    `created` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),\n    `updated` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),\n    `result` VARCHAR(256),\n    `message` text,\n    `status` VARCHAR(256) DEFAULT 'Inactive',\n    `inputData` longtext,\n    `outputData` longtext\n) ENGINE=InnoDB DEFAULT CHARSET=utf8", BindVars: {}
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
Error Creating Schema table2
Error: ER_OPTION_PREVENTS_STATEMENT: target: test.-.primary: vttablet: rpc error: code = Code(17) desc = The MySQL server is running with the --read-only option so it cannot execute this statement (errno 1290) (sqlstate HY000) (CallerID: test): Sql: "CREATE TABLE `table2` (\n    PRIMARY KEY(id),\n    `id` VARCHAR(256) NOT NULL,\n    `created` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),\n    `updated` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),\n    `result` VARCHAR(256),\n    `message` text,\n    `status` VARCHAR(256) DEFAULT 'Inactive',\n    `inputData` longtext,\n    `outputData` longtext\n) ENGINE=InnoDB DEFAULT CHARSET=utf8", BindVars: {}
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
Error Creating Schema table2
Error: ER_OPTION_PREVENTS_STATEMENT: target: test.-.primary: vttablet: rpc error: code = Code(17) desc = The MySQL server is running with the --read-only option so it cannot execute this statement (errno 1290) (sqlstate HY000) (CallerID: test): Sql: "CREATE TABLE `table2` (\n    PRIMARY KEY(id),\n    `id` VARCHAR(256) NOT NULL,\n    `created` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),\n    `updated` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),\n    `result` VARCHAR(256),\n    `message` text,\n    `status` VARCHAR(256) DEFAULT 'Inactive',\n    `inputData` longtext,\n    `outputData` longtext\n) ENGINE=InnoDB DEFAULT CHARSET=utf8", BindVars: {}
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
Error Creating Schema table2
Error: ER_OPTION_PREVENTS_STATEMENT: target: test.-.primary: vttablet: rpc error: code = Code(17) desc = The MySQL server is running with the --read-only option so it cannot execute this statement (errno 1290) (sqlstate HY000) (CallerID: test): Sql: "CREATE TABLE `table2` (\n    PRIMARY KEY(id),\n    `id` VARCHAR(256) NOT NULL,\n    `created` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),\n    `updated` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),\n    `result` VARCHAR(256),\n    `message` text,\n    `status` VARCHAR(256) DEFAULT 'Inactive',\n    `inputData` longtext,\n    `outputData` longtext\n) ENGINE=InnoDB DEFAULT CHARSET=utf8", BindVars: {}
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
Error Creating Schema table2
Error: ER_OPTION_PREVENTS_STATEMENT: target: test.-.primary: vttablet: rpc error: code = Code(17) desc = The MySQL server is running with the --read-only option so it cannot execute this statement (errno 1290) (sqlstate HY000) (CallerID: test): Sql: "CREATE TABLE `table2` (\n    PRIMARY KEY(id),\n    `id` VARCHAR(256) NOT NULL,\n    `created` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),\n    `updated` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),\n    `result` VARCHAR(256),\n    `message` text,\n    `status` VARCHAR(256) DEFAULT 'Inactive',\n    `inputData` longtext,\n    `outputData` longtext\n) ENGINE=InnoDB DEFAULT CHARSET=utf8", BindVars: {}
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
Error Creating Schema table2
Error: ER_OPTION_PREVENTS_STATEMENT: target: test.-.primary: vttablet: rpc error: code = Code(17) desc = The MySQL server is running with the --read-only option so it cannot execute this statement (errno 1290) (sqlstate HY000) (CallerID: test): Sql: "CREATE TABLE `table2` (\n    PRIMARY KEY(id),\n    `id` VARCHAR(256) NOT NULL,\n    `created` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),\n    `updated` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),\n    `result` VARCHAR(256),\n    `message` text,\n    `status` VARCHAR(256) DEFAULT 'Inactive',\n    `inputData` longtext,\n    `outputData` longtext\n) ENGINE=InnoDB DEFAULT CHARSET=utf8", BindVars: {}
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
Error Creating Schema table2
Error: ER_OPTION_PREVENTS_STATEMENT: target: test.-.primary: vttablet: rpc error: code = Code(17) desc = The MySQL server is running with the --read-only option so it cannot execute this statement (errno 1290) (sqlstate HY000) (CallerID: test): Sql: "CREATE TABLE `table2` (\n    PRIMARY KEY(id),\n    `id` VARCHAR(256) NOT NULL,\n    `created` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),\n    `updated` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),\n    `result` VARCHAR(256),\n    `message` text,\n    `status` VARCHAR(256) DEFAULT 'Inactive',\n    `inputData` longtext,\n    `outputData` longtext\n) ENGINE=InnoDB DEFAULT CHARSET=utf8", BindVars: {}
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
Schema table2 Initialized
Schema table3 Initialized
Schema table4 Initialized
Schema table5 Initialized
Schema table6 Initialized
Schema table7 Initialized
Schema table8 Initialized
Schema table9 Initialized
Schema table10 Initialized
Schema table11 Initialized
Schema table12 Initialized
Schema table13 Initialized
Schema table14 Initialized
Schema table15 Initialized
Schema table16 Initialized
Schema table17 Initialized
Schema table18 Initialized
Schema table19 Initialized
Schema table20 Initialized
Schema table21 Initialized
Error Creating Schema table22
Error: UNKNOWN_CODE_PLEASE_REPORT: target: test.-.primary: vttablet: rpc error: code = Canceled desc = initial packet read failed: EOF (errno 2013) (sqlstate HY000) (CallerID: test): Sql: "CREATE TABLE `table22` (\n    PRIMARY KEY(id),\n    `id` VARCHAR(256) NOT NULL,\n    `created` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),\n    `updated` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),\n    `result` VARCHAR(256),\n    `message` text,\n    `status` VARCHAR(256) DEFAULT 'Inactive',\n    `inputData` longtext,\n    `outputData` longtext\n) ENGINE=InnoDB DEFAULT CHARSET=utf8", BindVars: {}
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
Error Creating Schema table22
Error: ER_OPTION_PREVENTS_STATEMENT: target: test.-.primary: vttablet: rpc error: code = Code(17) desc = The MySQL server is running with the --read-only option so it cannot execute this statement (errno 1290) (sqlstate HY000) (CallerID: test): Sql: "CREATE TABLE `table22` (\n    PRIMARY KEY(id),\n    `id` VARCHAR(256) NOT NULL,\n    `created` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),\n    `updated` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),\n    `result` VARCHAR(256),\n    `message` text,\n    `status` VARCHAR(256) DEFAULT 'Inactive',\n    `inputData` longtext,\n    `outputData` longtext\n) ENGINE=InnoDB DEFAULT CHARSET=utf8", BindVars: {}
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
Error Creating Schema table22
Error: ER_OPTION_PREVENTS_STATEMENT: target: test.-.primary: vttablet: rpc error: code = Code(17) desc = The MySQL server is running with the --read-only option so it cannot execute this statement (errno 1290) (sqlstate HY000) (CallerID: test): Sql: "CREATE TABLE `table22` (\n    PRIMARY KEY(id),\n    `id` VARCHAR(256) NOT NULL,\n    `created` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),\n    `updated` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),\n    `result` VARCHAR(256),\n    `message` text,\n    `status` VARCHAR(256) DEFAULT 'Inactive',\n    `inputData` longtext,\n    `outputData` longtext\n) ENGINE=InnoDB DEFAULT CHARSET=utf8", BindVars: {}
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
Error Creating Schema table22
Error: ER_OPTION_PREVENTS_STATEMENT: target: test.-.primary: vttablet: rpc error: code = Code(17) desc = The MySQL server is running with the --read-only option so it cannot execute this statement (errno 1290) (sqlstate HY000) (CallerID: test): Sql: "CREATE TABLE `table22` (\n    PRIMARY KEY(id),\n    `id` VARCHAR(256) NOT NULL,\n    `created` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),\n    `updated` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),\n    `result` VARCHAR(256),\n    `message` text,\n    `status` VARCHAR(256) DEFAULT 'Inactive',\n    `inputData` longtext,\n    `outputData` longtext\n) ENGINE=InnoDB DEFAULT CHARSET=utf8", BindVars: {}
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
Error Creating Schema table22
Error: ER_OPTION_PREVENTS_STATEMENT: target: test.-.primary: vttablet: rpc error: code = Code(17) desc = The MySQL server is running with the --read-only option so it cannot execute this statement (errno 1290) (sqlstate HY000) (CallerID: test): Sql: "CREATE TABLE `table22` (\n    PRIMARY KEY(id),\n    `id` VARCHAR(256) NOT NULL,\n    `created` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),\n    `updated` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),\n    `result` VARCHAR(256),\n    `message` text,\n    `status` VARCHAR(256) DEFAULT 'Inactive',\n    `inputData` longtext,\n    `outputData` longtext\n) ENGINE=InnoDB DEFAULT CHARSET=utf8", BindVars: {}
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
Error Creating Schema table22
Error: ER_OPTION_PREVENTS_STATEMENT: target: test.-.primary: vttablet: rpc error: code = Code(17) desc = The MySQL server is running with the --read-only option so it cannot execute this statement (errno 1290) (sqlstate HY000) (CallerID: test): Sql: "CREATE TABLE `table22` (\n    PRIMARY KEY(id),\n    `id` VARCHAR(256) NOT NULL,\n    `created` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),\n    `updated` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),\n    `result` VARCHAR(256),\n    `message` text,\n    `status` VARCHAR(256) DEFAULT 'Inactive',\n    `inputData` longtext,\n    `outputData` longtext\n) ENGINE=InnoDB DEFAULT CHARSET=utf8", BindVars: {}
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
Error Creating Schema table22
Error: ER_OPTION_PREVENTS_STATEMENT: target: test.-.primary: vttablet: rpc error: code = Code(17) desc = The MySQL server is running with the --read-only option so it cannot execute this statement (errno 1290) (sqlstate HY000) (CallerID: test): Sql: "CREATE TABLE `table22` (\n    PRIMARY KEY(id),\n    `id` VARCHAR(256) NOT NULL,\n    `created` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),\n    `updated` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),\n    `result` VARCHAR(256),\n    `message` text,\n    `status` VARCHAR(256) DEFAULT 'Inactive',\n    `inputData` longtext,\n    `outputData` longtext\n) ENGINE=InnoDB DEFAULT CHARSET=utf8", BindVars: {}
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
Error Creating Schema table22
Error: ER_OPTION_PREVENTS_STATEMENT: target: test.-.primary: vttablet: rpc error: code = Code(17) desc = The MySQL server is running with the --read-only option so it cannot execute this statement (errno 1290) (sqlstate HY000) (CallerID: test): Sql: "CREATE TABLE `table22` (\n    PRIMARY KEY(id),\n    `id` VARCHAR(256) NOT NULL,\n    `created` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),\n    `updated` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),\n    `result` VARCHAR(256),\n    `message` text,\n    `status` VARCHAR(256) DEFAULT 'Inactive',\n    `inputData` longtext,\n    `outputData` longtext\n) ENGINE=InnoDB DEFAULT CHARSET=utf8", BindVars: {}
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
Schema table22 Initialized
Schema table23 Initialized
Schema table24 Initialized
Schema table25 Initialized
Schema table26 Initialized
Schema table27 Initialized
Schema table28 Initialized
Schema table29 Initialized
Schema table30 Initialized

```
