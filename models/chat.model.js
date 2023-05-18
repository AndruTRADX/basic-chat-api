const mongose = require('mongoose')

const Schema = mongose.Schema

const mySchema = new Schema({
  users: [
    {
      type: Schema.ObjectId,
      ref: 'user'
    }
  ],
})

const model = mongose.model('chat', mySchema)

module.exports = model