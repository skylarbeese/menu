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
},
adr: {
  type: String,
  required: true
},
city: {
type: String,
required: true
},
state: {
type: String,
required: true
},
zip: {
  type: String,
  required: true
  },
full: {
  type: Number,
  required: true
},
half: {
  type: Number,
  required: true
},
bed: {
  type: Number,
  required: true
},
sq: {
  type: Number,
  required: true
},
price: {
  type: Number,
  required: true
}
})

const Form = mongoose.model('Form', FormSchema)
module.exports = Form