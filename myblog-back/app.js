const express = require('express');
const fs = require('fs')
const path = require('path')
const cors = require('cors')
const { expressjwt: jwt } = require('express-jwt')

const { port } = require('./config.js').server
const login = require('./routes/login')
const jwtConfig = require('./jwt/config.js')

const app = express();


//设置token拦截
app.use(jwt({
  secret: jwtConfig.jwtSecretKey,
  algorithms: ['HS256']
}).unless({
  path: [
    '/login',
    '/register',
    '/login/password'
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


app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})