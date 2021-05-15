const mongoose = require('mongoose')

const LoginSchema = new mongoose.Schema({
  email: {
      type: String,
      required: true
  },
  user: {
    type: String,
    required: true
  },
  pass: {
    type: String,
    required: true
},
passV: {
  type: String,
  required: true
}

})

const Login = mongoose.model('Login', LoginSchema)
module.exports = Login