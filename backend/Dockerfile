#version node 1.9.3
FROM node:19.9-alpine3.16

# Create app directory
RUN mkdir -p /backend
WORKDIR /backend

# Install app dependencies
COPY package*.json /backend/

RUN yarn install

# Bundle app source
COPY . /backend

EXPOSE 9000
CMD [ "yarn", "start" ]