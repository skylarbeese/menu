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
    required: false
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
},
base: {
  type: String,
  required: true
},
loft: {
  type: String,
  required: true
},
park: {
  type: String,
  required: true
},
garS: {
  type: Number,
  required: true
},
lot: {
  type: Number,
  required: true
},
sqm: {
  type: String,
  required: true
},
year: {
  type: Number,
  required: true
}
})

const Form = mongoose.model('Form', FormSchema)
module.exports = Form