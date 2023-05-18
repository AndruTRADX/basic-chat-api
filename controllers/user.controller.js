const service = require('../services/user.service')

const addUser = (name) => {
  if (!name) {
    return Promise.reject('Invalid name')
  }
  
  const user = {
    name,
  }

  return service.add(user)
}

const getAllUsers = () => {
  return new Promise((res, rej)=> {
    const users = service.list()
    if (users.length === 0) {
      rej('Aún no hay usuarios')
    } else {
      res(users)
    }
  })
}

module.exports = {
  addUser,
  getAllUsers,
}