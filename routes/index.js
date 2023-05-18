const express = require('express')
const message = require('./message.router')
const user = require('./user.router')
const chat = require('./chat.router')

const routes = (server) => {
  server.use('/message', message)
  server.use('/user', user)
  server.use('/chat', chat)
}

module.exports = routes