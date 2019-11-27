#!/bin/sh
cd ~/Dev
# Stop mongodb service
service mongodb stop
# show running images
docker image ls -a
docker container ls -a
# Go into backend, build and run
cd ~/Dev/Node/umbrella-backend
echo "Building and Starting Backend API RESTful server"
docker-compose up
