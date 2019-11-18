# 1 create and build
FROM node:latest as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod

# 2
FROM nginx:alpine
COPY --from=node /app/dist/behavior /usr/share/nginx/html
