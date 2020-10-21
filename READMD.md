# Search key word suggestion service

## Requirements

- docker
- docker-compose
- nodejs 14

## Including modules

### Docker containers

- elasticsearch 7.9.1
- logstash 7.9.1
- kibana 7.9.1
- nodejs14

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
