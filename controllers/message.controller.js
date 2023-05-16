const store = require('./all-messages.controller')

const addMessage = (user, message) => {
  return new Promise((res, rej) => {
    if(!user || !message) {
      rej('Los datos son incorrectos')
    } else {
      const fullMsg = {
        user: user,
        message: message,
        date: new Date(),
      }
      res(fullMsg)
      store.add(fullMsg)
    }
  })
}

const getAllMessages = () => {
  return new Promise((res, rej)=> {
    const messages = store.list()
    if (messages.length === 0) {
      rej('Aún no hay mensajes')
    } else {
      res(messages)
    }
  })
}

module.exports = {
  addMessage,
  getAllMessages
}