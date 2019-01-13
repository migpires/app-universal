FROM node:alpine

RUN apk add --no-cache bash

WORKDIR /usr/web --no-cache

COPY ./app .

RUN npm install

CMD [ "npm", "run", "serve"]
