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
      const full = req.body.full;
      const half = req.body.half;
      const bed = req.body.bed;
      const sq = req.body.sq;
      const price = req.body.price;

      const adr = req.body.adr;
      const city = req.body.city;
      const state = req.body.state;
      const zip = req.body.zip;
      const form = new Form({
        buy, prop, des, full, half, bed, sq, price,
        adr, city, state, zip
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
  app.get('/inst/read', async (req, res) => {
    Form.find({}, (err, result) => {
      if(err) {
        res.send(err)
      }
      res.send(result)
    })
  })
  app.get('/inst/read/:id', async (req, res) => {
    const id = req.params.id
    Form.findById(id, (err, result) => {
      if(err) {
        res.send(err)
      }
      res.send(result)
    })
  })
  app.delete('/inst/del/:id', async (req, res) => {
    const id = req.params.id
    Form.findByIdAndDelete(id, (err, result) => {
      if(err) {
        res.send(err)
      }
      res.send(result)
    })
  })

  app.put('/inst/edit/:id', async (req, res) => {
    const id = req.params.id
     Form.findById(id)
     .then(blog => {
      blog.buy = req.body.buy;
      blog.prop = req.body.prop;
      blog.des = req.body.des;
      blog.full = req.body.full;
      blog.half = req.body.half;
      blog.bed = req.body.bed;
      blog.sq = req.body.sq;
      blog.price = req.body.price;

      blog.adr = req.body.adr;
      blog.city = req.body.city;
      blog.state = req.body.state;
      blog.zip = req.body.zip;
    
       blog.save()
       
       .then(() => res.json('your post has been UPDATED'))
     })
  })
app.listen(3001)