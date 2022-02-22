#!/bin/bash -x

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"

REPO=jseparovic
VERSION=0.1.0

if [ "$1" == "-r" ]
then
  ARGS=--no-cache
fi

project=knex-test

DOCKER_BUILDKIT=1 docker build $ARGS -t ${project} . || exit 1
docker tag ${project} ${REPO}/${project}:${VERSION} || exit 1
docker tag ${project} ${REPO}/${project}:latest || exit 1
docker push ${REPO}/${project}:${VERSION} || exit 1
docker push ${REPO}/${project}:latest || exit 1
