FROM node:alpine AS builder

RUN mkdir -p /usr/src/app
ENV PORT 3060

WORKDIR /usr/src/app

COPY package.json /usr/src/app
COPY yarn.lock /usr/src/app

RUN yarn install --production

COPY . /usr/src/app

RUN yarn build

CMD [ "yarn", "start" ]
