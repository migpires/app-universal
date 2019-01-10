FROM node:alpine

RUN apk add --no-cache bash

WORKDIR /usr/web

COPY ./app .

RUN npm install

CMD [ "npm", "run", "start", "serve" ]