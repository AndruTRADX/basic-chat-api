const list = []

function addMessage(message) {
  list.push(message)
}

function getAllMessages() {
  return list
}

module.exports = {
  add: addMessage,
  list: getAllMessages
}