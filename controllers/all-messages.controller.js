const mongoose = require('mongoose')
const MessageModel = require('../models/message.model')

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

async function addMessage(message) {
  try {
    const newMessage = new MessageModel(message)
    await newMessage.save()
    console.log('Mensaje guardado en la base de datos:', newMessage)
  } catch (error) {
    console.error('Error al guardar el mensaje en la base de datos:', error)
  }
}

async function getAllMessages(filterUser) {
  try {
    let filter = {}
    if (filterUser !== null) {
      filter = { user: filterUser }
    }
    const messages = await MessageModel.find(filter)
    return messages
  } catch (error) {
    console.error('Error al obtener los mensajes de la base de datos:', error)
    return []
  }
}

async function updateText(id, message){
  try {
    const updatedMessage = await MessageModel.findByIdAndUpdate(id, {message}, {new: true})
    return updatedMessage
  } catch (error) {
    console.error('Error al editar el mensaje de la base de datos:', error)
    return []
  }
}

async function removeMessage(id) {
  try {
    await MessageModel.findByIdAndDelete(id);
    return id;
  } catch (error) {
    console.error('Error al borrar datos:', error);
    throw error;
  }
}

connectToDatabase()

module.exports = {
  connect: connectToDatabase,
  add: addMessage,
  list: getAllMessages,
  update: updateText,
  delete: removeMessage
}