#!/bin/bash

service docker stop
service docker start
docker-compose down && docker-compose up && docker-compose build
docker cp ./media/pics $(docker ps -aqf "name=containername"):/media/pics
