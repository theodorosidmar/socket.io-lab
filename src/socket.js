const io = require('socket.io')

class Socket {
  constructor (server) {
    this.io = io(server)
    this.connections = 0
    this.io.on('connection', (socket) => this.onConnectionCallback(socket))
  }

  onConnectionCallback (socket) {
    console.log(`Someone got connected. Now we've got ${++this.connections} connections`)
    socket.on('disconnect', () => this.onDisconnectCallback())
    socket.on('health', (msg) => this.onHealthCallback(socket, msg))
  }

  onDisconnectCallback () {
    console.log(`Someone got disconnected. Now we've got ${--this.connections} connections`)
  }

  onHealthCallback (socket, msg) {
    console.log(msg)
    socket.emit('health', 'Yes! Im alive!')
  }
}

module.exports = Socket
