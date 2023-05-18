const mongose = require('mongoose')

const Schema = mongose.Schema

const mySchema = new Schema({
  name: String,
})

const model = mongose.model('user', mySchema)

module.exports = model