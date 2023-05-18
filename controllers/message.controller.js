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

const getAllMessages = (filterUser) => {
  return new Promise((res, rej)=> {
    const messages = store.list(filterUser)
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
        const data = await store.update(id, message)
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
      await store.delete(id);
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