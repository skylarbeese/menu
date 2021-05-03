const mongoose = require('mongoose')

const FormSchema = new mongoose.Schema({
  buy: {
      type: String,
      required: true
  },
  prop: {
    type: String,
    required: true
  },
  des: {
    type: String,
    required: true
}
})

const Form = mongoose.model('Form', FormSchema)
module.exports = Form