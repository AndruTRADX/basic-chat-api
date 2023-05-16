const express = require('express')
const message = require('./message.router')

const routes = (server) => {
  server.use('/message', message)
}

module.exports = routes