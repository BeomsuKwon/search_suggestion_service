#!/bin/bash

BASEDIR="$(dirname $0)"
ROOTDIR="$( cd "$(dirname "$BASEDIR")" >/dev/null 2>&1 ; pwd -P )"

DOCKER_DIR="$ROOTDIR/logs/docker"
# DOCKER_LOGFILE="$DOCKER_DIR/docker.log"
DOCKER_ERRORLOG="$DOCKER_DIR/docker.error.log"
if [ ! -d $DOCKER_DIR ]; then
    mkdir -p $DOCKER_DIR
fi

docker-compose up -d --build 1>/dev/null