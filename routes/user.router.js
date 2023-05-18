const express = require('express')
const router = express.Router()
const response = require('../utils/response')
const controller = require('../controllers/user.controller')

router.post('/', (req, res) => {
  const { name } = req.body
  controller.addUser(name)
    .then((data) => response.success(req, res, data, 201))
    .catch((err) => response.error(req, res, err, 400))
})

router.get('/', (req, res) => {
  controller.getAllUsers()
    .then((users) => response.success(req, res, users, 200))
    .catch((err) => response.error(req, res, err, 404))
})

module.exports = router