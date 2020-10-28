const express = require('express')
const c = require('colors')
const http = require('http')
const app = express()


module.exports = class Server {
constructor(client) {
this.port = client.port
}
async CreateServer() {
const server = http.createServer(app)

server.listen(this.port).then(() => {
    console.log(`[ ${c.bgMagenta('SERVER')} ] - ${c.bgRed('CONNECTED WITH SUCESS')}`)
})
}
}


