#!/bin/sh
cd ~/Dev
# show running images
docker image ls -a
docker container ls -as
# run the web server
cd ~/Dev/Angular/umbrella-webserver
# docker run -it -p 80:80 umbrella-webserver-project:prod 
# docker run -it -p 80:80 umbrella-webserver-project:dev --name webserver
docker run -d --name webserver -p 80:80 umbrella-webserver-project:prod
# docker run -d --name webserver -p 80:80 umbrella-webserver-project:dev
docker image ls -a
docker container ls -as
echo "Started WebServer on localhost or http://127.0.0.1"
