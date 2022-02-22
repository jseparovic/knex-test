
```
cd ~
git clone https://github.com/jseparovic/knex-test.git
cd knex-test
source functions.bash

# Install vitess (see functions.bash)
f_install_vitess

# Install knex test (see functions.bash)
f_install_test

[root@master1 knex-test]# ktga
NAME                             READY   STATUS    RESTARTS   AGE
pod/knex-test-56644946df-2bcqh   1/1     Running   0          16m

NAME                TYPE        CLUSTER-IP     EXTERNAL-IP   PORT(S)   AGE
service/knex-test   ClusterIP   10.103.78.41   <none>        80/TCP    16m

NAME                        READY   UP-TO-DATE   AVAILABLE   AGE
deployment.apps/knex-test   1/1     1            1           16m

NAME                                   DESIRED   CURRENT   READY   AGE
replicaset.apps/knex-test-56644946df   1         1         1       16m

[root@master1 knex-test]# ktl pod/knex-test-56644946df-2bcqh
yarn run v1.22.17
warning package.json: No license field
$ yarn build && node dist/tsc
warning package.json: No license field
$ tsc -p tsconfig.json
Example app listening at http://:: 80


# Trigger the create tables job
[root@master1 knex-test]# centos
If you don't see a command prompt, try pressing enter.
[root@centos-util-1645529154 /]# curl -X POST http://knex-test.test/create
[root@centos-util-1645529154 /]#
```
