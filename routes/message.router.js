const express = require('express')
const router = express.Router()

const response = require('../utils/response')
const controller = require('../controllers/message.controller')

router.get('/', (req, res) => {
  const filterMessage = req.query.user || null

  controller.getAllMessages(filterMessage)
    .then((msg) => response.success(req, res, msg, 200))
    .catch((err) => response.error(req, res, err, 404))
})

router.post('/', (req, res) => {
  const { user, message } = req.body
  controller.addMessage(user, message)
    .then((msg) => response.success(req, res, msg, 201))
    .catch((err) => response.error(req, res, err, 400))
})

router.patch('/:id', async (req, res) => {
  const { id } = req.params
  const { message } = req.body

  if (!id || !message) {
    throw new Error('Parámetros faltantes')
  }

  try {
    const data = await controller.updateMessage(id, message)
    response.success(req, res, data, 201)
  } catch (err) {
    response.error(req, res, err, 400)
  }
})

router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    await controller.deleteMessage(id);
    response.success(req, res, `Mensaje ${id} eliminado`, 200);
  } catch (error) {
    console.error('Error al eliminar el mensaje:', error);
    response.error(req, res, 'Error interno', 500);
  }
});

module.exports = router