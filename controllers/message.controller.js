const service = require('../services/message.service')

const addMessage = (user, message, chat, file) => {
  return new Promise((res, rej) => {
    if(!user || !message || !chat) {
      rej('Los datos son incorrectos')
    } 
    
    let fileURL = ''
    if (fileURL) {
      fileURL = 'http://localhost:3000/app/files/' + file.filename
    }
    
    const fullMsg = {
      user: user,
      message: message,
      chat: chat,
      file: fileURL,
      date: new Date(),
    }
    res(fullMsg)
    service.add(fullMsg)
    
  })
}

const getAllMessages = (filterUser) => {
  return new Promise((res, rej)=> {
    const messages = service.list(filterUser)
    if (messages.length === 0) {
      rej('Aún no hay mensajes')
    } else {
      res(messages)
    }
  })
}

const updateMessage = (id, message) => {
  return new Promise( async (resolve, reject) => {
    if (id && message) {
      try {
        const data = await service.update(id, message)
        resolve(data)
      } catch (error) {
        reject(error)
      }
    } else {
      reject(('Missing params'))
    }
  })
}

const deleteMessage = (id) => {
  return new Promise(async (resolve, reject) => {
    if (!id) {
      reject('Id inválido');
    }

    try {
      await service.delete(id);
      resolve();
    } catch (error) {
      reject(error);
    }
  });
};


module.exports = {
  addMessage,
  getAllMessages,
  updateMessage,
  deleteMessage
}