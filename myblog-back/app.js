const express = require('express');
const fs = require('fs')
const path = require('path')
const cors = require('cors')
const multer = require('multer')
const { expressjwt: jwt } = require('express-jwt')
const { port } = require('./config.js').server
const jwtConfig = require('./jwt/config.js')
//! 设置路由托管
const login = require('./routes/login')
const message = require('./routes/message')
const user = require('./routes/user')
const article = require('./routes/article.js')
const note = require('./routes/note.js')
const uploadImage = require('./routes/upload.js')
const app = express();
//这里是文件传输
// const upload = multer({
//   dest: '/public/upload'
// })
// app.use(upload.any())
app.use(cors())
app.use(express.static('./public'))
//设置token拦截
app.use(jwt({
  secret: jwtConfig.jwtSecretKey,
  algorithms: ['HS256']
}).unless({
  path: [
    '/login',
    '/home',
    '/vistor',
    '/register',
    '/login/password',
    '/upload/upload-image'
  ]
})
)

app.use(express.json())
app.use(express.urlencoded({ extended: true }))




//拦截错误 其实还没有用到过
app.use((req, res, next) => {
  res.cc = (err, status = 1) => {
    res.send({
      status,
      message: err instanceof Error ? err.message : err
    })
  }
  next()
})




// TODO: 对于内容未进行转义 应当对所有的字符串进行转义 再提交 
// 不然会报错errno1064
app.use('/login', login)
app.use('/message', message)
app.use('/user', user)
app.use('/article', article)
app.use('/note', note)
app.use('/upload', uploadImage)


app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})