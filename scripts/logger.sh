#!/bin/bash

BASEDIR="$(dirname $0)"
ROOTDIR="$( cd "$(dirname "$BASEDIR")" >/dev/null 2>&1 ; pwd -P )"

LOGSTASH_DIR="$ROOTDIR/logs/logstash"
LOGSTASH_LOGFILE="$LOGSTASH_DIR/logstash.log"
LOGSTASH_ERRORLOG="$LOGSTASH_DIR/logstash.error.log"
if [ ! -d $LOGSTASH_DIR ]; then
    mkdir -p $LOGSTASH_DIR
fi

ELASTICSEARCH_DIR="$ROOTDIR/logs/elasticsearch"
ELASTICSEARCH_LOGFILE="$ELASTICSEARCH_DIR/elasticsearch.log"
ELASTICSEARCH_ERRORLOG="$ELASTICSEARCH_DIR/elasticsearch.error.log"
if [ ! -d $ELASTICSEARCH_DIR ]; then
    mkdir -p $ELASTICSEARCH_DIR
fi

KIBANA_DIR="$ROOTDIR/logs/kibana"
KIBANA_LOGFILE="$KIBANA_DIR/kibana.log"
KIBANA_ERRORLOG="$KIBANA_DIR/kibana.error.log"
if [ ! -d $KIBANA_DIR ]; then
    mkdir -p $KIBANA_DIR
fi


echo "Collecting logstash log"
docker logs $(docker ps -a | grep logstash | cut -d$' ' -f1) > $LOGSTASH_LOGFILE 2> $LOGSTASH_ERRORLOG

echo "Collecting elasticsearch log"
docker logs $(docker ps -a | grep elasticsearch | cut -d$' ' -f1) > $ELASTICSEARCH_LOGFILE 2> $ELASTICSEARCH_ERRORLOG

echo "Collecting kibana log"
docker logs $(docker ps -a | grep kibana | cut -d$' ' -f1) > $KIBANA_LOGFILE 2> $KIBANA_ERRORLOG