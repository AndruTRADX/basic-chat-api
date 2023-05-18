const mongose = require('mongoose')

const Schema = mongose.Schema

const mySchema = new Schema({
  user: {
    type: Schema.ObjectId,
    ref: 'user'
  },
  chat: [
    {
      type: Schema.ObjectId,
      ref: 'chat'
    }
  ],
  message: [
    {
      type: String,
      required: true
    }
  ],
  file: String,
  date: Date
})

const model = mongose.model('message', mySchema)

module.exports = model