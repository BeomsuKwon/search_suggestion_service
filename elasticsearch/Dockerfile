FROM elasticsearch:7.9.1

COPY ./elasticsearch/config /usr/share/elasticsearch/config
RUN bin/elasticsearch-plugin install analysis-kuromoji
RUN bin/elasticsearch-plugin install analysis-icu

CMD ["eswrapper"]