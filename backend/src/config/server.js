const port = 3003
const backlog = () => console.log(`BACKEND is running on port ${port}`)

const boryParser = require('body-parser')
const server = require('express')()
const corsPass = require('./cors')

server.use(boryParser.urlencoded({extended: true}))
server.use(boryParser.json())
server.use(corsPass)

server.listen(port, backlog)

module.exports = server