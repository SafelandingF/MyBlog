const express = require('express');
const fs = require('fs')
const path = require('path')
const cors = require('cors')
const { expressjwt: jwt } = require('express-jwt')
const multer = require('multer')
const { port } = require('./config.js').server

const jwtConfig = require('./jwt/config.js')

//! 设置路由托管
const login = require('./routes/login')
const message = require('./routes/message')
const user = require('./routes/user')

const app = express();


const upload = multer({
  dest: './public/upload'
})
app.use(upload.any())
app.use(express.static('./public'))


//设置token拦截
app.use(jwt({
  secret: jwtConfig.jwtSecretKey,
  algorithms: ['HS256']
}).unless({
  path: [
    '/login',
    '/register',
    '/login/password',
  ]
})
)


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))




//拦截错误
app.use((req, res, next) => {
  res.cc = (err, status = 1) => {
    res.send({
      status,
      message: err instanceof Error ? err.message : err
    })
  }
  next()
})

app.use('/login', login)
app.use('/message', message)
app.use('/user', user)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})