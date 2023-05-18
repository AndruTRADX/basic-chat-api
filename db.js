const mongoose = require('mongoose')
require('dotenv').config()

const uri = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_DBNAME}/?retryWrites=true&w=majority`

async function connectToDatabase() {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    console.log('¡Conexión exitosa a la base de datos de MongoDB!')
  } catch (error) {
    console.error('Error al conectar con la base de datos de MongoDB:', error)
  }
}

module.exports = {
  db: connectToDatabase
}