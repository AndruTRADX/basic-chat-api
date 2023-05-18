const UserModel = require('../models/user.model')

async function addUser(user) {
  try {
    const myUser = new UserModel(user)
    await myUser.save()
    console.log('Usuario guardado en la base de datos:', myUser)
  } catch (error) {
    console.error('Error al guardar el usuario en la base de datos:', error)
  }
}

async function getAllUsers() {
  try {
    const users = await UserModel.find({})
    return users
  } catch (error) {
    console.error('Error al obtener los usuarios de la base de datos:', error)
    return []
  }
}

async function updateUser(id, user){
  try {
    // ...
  } catch (error) {
    // ...
  }
}

async function removeUser(id) {
  try {
    // ...
  } catch (error) {
    // ...
  }
}

module.exports = {
  add: addUser,
  list: getAllUsers,
  update: updateUser,
  delete: removeUser
}