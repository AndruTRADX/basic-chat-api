const express = require('express')
const router = express.Router()

const response = require('../utils/response')
const controller = require('../controllers/message.controller')

router.get('/', (req, res) => {
  controller.getAllMessages()
    .then((msg) => response.success(req, res, msg, 200))
    .catch((msg) => response.error(req, res, msg, 404))
})

router.post('/', (req, res) => {
  const { user, message } = req.body
  controller.addMessage(user, message)
    .then((msg) => response.success(req, res, msg, 201))
    .catch((msg) => response.error(req, res, msg, 400))
})

module.exports = router