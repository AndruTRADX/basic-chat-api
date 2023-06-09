// Importamos la librería express
const express = require('express')
const router = require('./routes/')
const { db } = require('./db')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use('/app', express.static('public'))

router(app)
db()

app.listen(port, () => {
  console.log(`Servidor conectado, escuchando el puerto ${port}`)
})