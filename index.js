require('dotenv').config()

const Server = require('./src/server')
const Socket = require('./src/socket')

const server = new Server()
const socket = new Socket(server.server)
server.listen()
