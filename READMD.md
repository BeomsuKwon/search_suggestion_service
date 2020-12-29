# Search key word suggestion service

## Requirements

- docker
- docker-compose

## Starting service

```bash
# Run in project root dir

# Run smartphone name crawler 
#   Crawlling names on wikipedia 
#   Link: https://en.wikipedia.org/wiki/List_of_Android_smartphones
python3 ./cell-phone-crawler/main.py

# docker-compose build & run below services
#   elasticsearch
#   logstash
#   kibana
#   search keyword suggestion service
sh ./scripts/up.sh

# Get log files
sh ./scripts/logger.sh
```

## Service end points

- Elasticsearch: http://localhost:9200
- Kibana: http://localhost:5601
- Keyword suggestion API: http://localhost:8080/api/products/?keyword
- demo application: http://localhost:8080/html/index.html

## Service Start flow

1. Deploy Elasticsearch, kibana container
2. Start logstash container
    1. Run migration pipeline(csv to elasticsearch)
3. Deploy Search keyword suggestion service.