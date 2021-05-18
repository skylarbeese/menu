const jwt = require('jsonwebtoken')

const auth =  (req, res, next) => {
try{  
    const token = req.header('x-auth-token')
  if(!token) 
    res.json('error token')
  
      const ver = jwt.verify(token,  proccess.env.JWT_SECRET)
 
  if(!ver)
  res.json('error token ver')
  req.user = ver.id
  next()
} catch(err) {

}
}

module.exports = auth