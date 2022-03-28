#!/bin/bash

docker cp ./media/pics $(docker ps -aqf "name=quickwebsite_nginx_1"):/media
docker cp ./sitemap    $(docker ps -aqf "name=quickwebsite_nginx_1"):/sitemap
