
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
```
