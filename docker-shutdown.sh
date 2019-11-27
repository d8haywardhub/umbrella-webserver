#!/bin/sh
cd ~/Dev
docker image ls -a
docker container ls -as

# stop mongoDB 
#service mongodb stop

# stop and remove containers
docker stop umbrella-backend-project
docker stop webserver

docker rm umbrella-backend-project
docker rm webserver

docker image ls -a
docker container ls -as

# remove images
docker rmi umbrella-backend_app
docker rmi umbrella-webserver-project:prod
docker rmi umbrella-webserver-project:dev

# pruning
docker system prune -f

# show status
docker image ls -a
docker container ls -as
