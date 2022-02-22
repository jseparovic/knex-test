#!/bin/bash

DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )

function f_install_test {
  kubectl delete namespace test
  kubectl apply -f $DIR/knex-test.yaml
}

function f_install_vitess {
  kubectl delete namespace vitess
  CUR=$(pwd)
  kubectl create namespace vitess
  mkdir -p $DIR/third-party
  cd $DIR/third-party && \
  rm -rf $DIR/third-party/vitess && \
  git clone https://github.com/vitessio/vitess.git && \
  cd $DIR/third-party/vitess/examples/operator && \
  kubectl --namespace vitess apply -f operator.yaml && \
  sleep 1 && \
  cd $DIR && \
  kubectl --namespace vitess apply -f vitess_initial_cluster.yaml
}

alias kv='kubectl --namespace vitess'
alias kvd='kv describe'
alias kvx='kv delete'
alias kvg='kv get'
alias kvl='kv logs -f'
alias kvgd='kv get deployment -o=wide'
alias kvgp='kv get pods -o=wide'
alias kvgs='kv get svc -o=wide'
alias kvga='kv get all'

alias kt='kubectl --namespace test'
alias ktd='kt describe'
alias ktx='kt delete'
alias ktg='kt get'
alias ktl='kt logs -f'
alias ktgd='kt get deployment -o=wide'
alias ktgp='kt get pods -o=wide'
alias ktgs='kt get svc -o=wide'
alias ktga='kt get all'

alias watch='watch '
alias w='watch '
