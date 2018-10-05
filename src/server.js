const express = require('express')
const http = require('http')

class Server {
  constructor () {
    this.app = express()
    this.server = http.createServer(this.app)
  }

  listen () {
    this.server.listen(process.env.PORT, () => console.log(`Server listenning on port ${process.env.PORT}`))
  }
}

module.exports = Server
