const mongose = require('mongoose')

const Schema = mongose.Schema

const mySchema = new Schema({
  user: String,
  message: String,
  date: Date
})

const model = mongose.model('message', mySchema)

module.exports = model