# Chat App

## Todo
* Integrations tests

## Requirements
* Production
  * Docker (tested with 19.03.1)
* Development
  * Node (tested with 13.5.0)
  * npm (tested with 6.13.4)

## Run both server and client
Production only.
>`docker-compose up`

## Run server
See `README.md` under server.

## Run client
See `README.md` under server.

## Tech Used

### Client
* `Cypress`
* `Material-UI`
* `React (create-react-app)`
  * State management done with custom 
* `socket.io`

### Server
* `Node`
* `Express`
* `socket.io`
* Logging with `Winston` and `Morgan`
* Validation done with `Joi`

### Build
* `Docker`. One `Dockerfile` for client and another for server. A `docker-compose.yml` that builds both for easy launch of the Chat App.