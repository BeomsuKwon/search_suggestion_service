FROM logstash:7.9.1

COPY ./files /usr/share/logstash/files
COPY ./logstash/config /usr/share/logstash/config
COPY ./logstash/pipeline /usr/share/logstash/pipeline

ENTRYPOINT ["/usr/local/bin/docker-entrypoint"]