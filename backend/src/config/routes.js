const express = require('express')

module.exports = server => {
  // API
  const router = express.Router()
  server.use('/api', router)

  // TODOS
  const todoService = require('../api/todo/todoService')
  todoService.register(router, '/todos')

}