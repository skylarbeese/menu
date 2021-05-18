const express = require('express')
const mongoose = require('mongoose')
const Form = require('./models/form')
const Login = require('./models/login')
const auth = require('./mid/auth')
const cors = require('cors')
const jwt = require('jsonwebtoken')
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
  app.delete('/inst/del/:id',  async (req, res) => {
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


  app.post('/inst/log',  async (req, res) => {
    try{
      const email = req.body.email;
      const user = req.body.user;
      const pass = req.body.pass;
      const passV = req.body.passV;
     
      const log = new Login({
       email, user, pass, passV


   })
   const ex = await Login.findOne({pass: pass})
   if(!email || !user || !pass || !passV) {
    res.json('empty feilds')
   } else if(pass !== passV) {
    res.json('passwords do not match')
   } else if(ex) {
    res.json('passwords ex')
   
   } else {

   
   const newAcc = log.save()
   if(newAcc) {
     res.json('your account has been made')
   } else {
    res.json('error, your account has not be made') 
   }
  }
}

     catch(err) {
  
    }
  })

  app.post('/inst/login',  async (req, res) => {
    try{
      const email = req.body.email;
      const user = req.body.user;
      const pass = req.body.pass;
     
      const userEx = await Login.findOne({email})
      const passEx = await Login.findOne({pass})
      if(!email || !pass)   {
      res.json('enter feilds')
      } else if(!userEx) {
        res.json('wrong email')
      } else if(!passEx) {
        res.json('wrong pass')
      
      } else {
        const token = jwt.sign({id: userEx._id}, proccess.env.JWT_SECRET)
        res.json({
          token,
          user: {
            id: userEx._id
            
          },
        })
   
  } 
}

     catch(err) {
  
    }
  
  })
  app.delete('/inst/del', auth, async (req, res) => {
    try{
        Login.findByIdAndDelete(req.user)
    }   catch(err) {
  
    }
  })
  app.post('/inst/ls', async (req, res) => {
    try{
      const token = req.header("x-auth-token")
      if(!token) return res.json(false)

      const ver = jwt.verity(token, proccess.env.JWT_SECRET)
      if(!ver) return res.json(false)

      const user = await Login.findById(ver.id)
      if(!user) return res.json(false)

    return res.json(true)

  }   catch(err) {

  }
  })
  app.get('/inst', async (req, res) => {
    const user = Login.findById(req.user)
    res.json(user)
  })
app.listen(3001)