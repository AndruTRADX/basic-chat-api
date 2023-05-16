// Definimos una función para enviar respuestas exitosas
exports.success = function (req, res, message, status) {
  res.status(status || 200).send({
    message: message,
    status: status,
    method: req.method
  })
}

// Definimos una función para enviar respuestas de error
exports.error = function (req, res, errorMsg, status) {
  res.status(status || 500).send({
    error: errorMsg,
    method: req.method,
    status: status
  })
}