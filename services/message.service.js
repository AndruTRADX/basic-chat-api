const MessageModel = require('../models/message.model')

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
  return new Promise((res, rej)=> {
    let filter = {}
    if (filterUser !== null) {
      filter = { user: filterUser }
    }
    
    // por favor explica esto chatGPT
    MessageModel.find(filter)
      .populate('user')
      .exec((err, data) => { 
        if (err) {
          rej(err)
        }
        res(data)
      })
  })
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

module.exports = {
  add: addMessage,
  list: getAllMessages,
  update: updateText,
  delete: removeMessage
}