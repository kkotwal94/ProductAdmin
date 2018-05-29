# ProductAdmin
Product admin

## Get Started

`docker-compose -f docker-compose.dev.yml build`

`docker-compose -f docker-compose.dev.yml up -d`

This builds our docker containers and starts up a Daemon. It includes our API (Nodejs) / Client (Create React APP) / MongoDB

It may ask you to create a mongodb volume, but the instructions will be given to you in the terminal.

It will be something like this:

`docker volume create mongodbdata`

Enables HMR both client and server.

### Graph

There are existing mongo models I created, the graph follows that and has a working query for mostly all of them. Some have mutations like *Brands and Colors.*

#### Technology
Used GraphQL Express along with graphql tools to define a schema.

#### Graphiql
Graphiql exists on localhost:3001/graphiql

#### API
There are some api endpoints, just for testing server purposes.
