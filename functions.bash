#!/bin/bash

DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )

function f_install_test {
  kubectl delete namespace test
  kubectl apply -f $DIR/knex-test.yaml
}
