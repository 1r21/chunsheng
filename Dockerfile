FROM nginx:alpine

LABEL maintainer="iron"

ENV SERVER_PORT=80
ENV API_SERVER=http://0.0.0.0:8000

COPY ./dist /dist
COPY ./nginx.conf /etc/nginx/templates/default.conf.template
EXPOSE 80

WORKDIR /dist
