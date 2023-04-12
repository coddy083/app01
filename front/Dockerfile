#version node 1.9.3
FROM node:19.9-alpine3.16

# Create app directory
RUN mkdir -p /front
WORKDIR /front

# Install app dependencies
COPY package*.json /front/

RUN yarn install
RUN yarn build

# Bundle app source
COPY . /front

EXPOSE 4000
CMD [ "yarn", "start" ]