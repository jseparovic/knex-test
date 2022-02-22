
```
cd ~
git clone https://github.com/jseparovic/knex-test.git
cd knex-test
source functions.bash

# Install vitess (see functions.bash)
f_install_vitess

# Install knex test (see functions.bash)
f_install_test

# Check the logs on knex-test pod
[root@master1 knex-test]# ktlkt
yarn run v1.22.17
warning package.json: No license field
$ node dist/tsc
Knex Test app listening at http://:: 80
(see OUTPUT.md for sample)

# Trigger the create tables job:
[root@master1 knex-test]# centos
If you don't see a command prompt, try pressing enter.
[root@centos-util-1645529154 /]# curl -X POST http://knex-test.test/ddl
[root@centos-util-1645529154 /]#

# Or to drop the tables:
[root@master1 knex-test]# centos
If you don't see a command prompt, try pressing enter.
[root@centos-util-1645529154 /]# curl -X DELETE http://knex-test.test/ddl
[root@centos-util-1645529154 /]#

# Check Tables:
[root@master1 knex-test]# centos
[root@centos-util-1645532089 /]#
[root@centos-util-1645532089 /]# mysql
Reading table information for completion of table and column names
You can turn off this feature to get a quicker startup with -A

Welcome to the MariaDB monitor.  Commands end with ; or \g.
Your MySQL connection id is 2
Server version: 5.7.9-vitess-14.0.0-SNAPSHOT Version: 14.0.0-SNAPSHOT (Git revision 3144b4b096 branch 'main') built on Mon Feb 21 19:42:17 UTC 2022 by vitess@buildkitsandbox using go1.17.6 linux/amd64

Copyright (c) 2000, 2018, Oracle, MariaDB Corporation Ab and others.

Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.

MySQL [test]> show tables;
+----------------+
| Tables_in_test |
+----------------+
| table1         |
| table10        |
| table11        |
| table12        |
| table13        |
| table14        |
| table15        |
| table16        |
| table17        |
| table18        |
| table19        |
| table2         |
| table20        |
| table21        |
| table22        |
| table23        |
| table24        |
| table25        |
| table26        |
| table27        |
| table28        |
| table29        |
| table3         |
| table30        |
| table4         |
| table5         |
| table6         |
| table7         |
| table8         |
| table9         |
+----------------+
30 rows in set (0.00 sec)
```
