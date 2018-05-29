FROM node:latest

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app/

RUN npm install

ADD . /usr/src/app/

RUN npm run-script build:dev
CMD [ "npm", "start" ]
