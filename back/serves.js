const express = require('express')
const mongoose = require('mongoose')
const Form = require('./models/form')
const cors = require('cors')

const app = express()
app.use(express.json())

app.use(cors())

mongoose.connect("mongodb+srv://skylar:12@cluster0.0kkpf.mongodb.net/lists2?retryWrites=true&w=majority", 
{ useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true}
)


app.post('/inst',  async (req, res) => {
    try{
      const buy = req.body.buy;
      const prop = req.body.prop;
      const des = req.body.des;
      const form = new Form({
        buy, prop, des
   })
   
   const newList = form.save()
   if(newList) {
     res.json('your listing has been posted!')
   } else {
    res.json('error, your post have not been listed') 
   }
}
   
     catch(err) {
  
    }
  })

app.listen(3001)