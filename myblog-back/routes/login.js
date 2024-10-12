const express = require('express')
const router = express.Router()
const db = require('../db/db').db
const jwt = require('jsonwebtoken')
const jwtConfig = require('../jwt/config')
const { use } = require('express/lib/application')


// token 只是用来校验密钥的 并不需要在数据库保存

router.get('/', (req, res) => {
  const sqlParams = req.query.account
  // console.log(req.query)
  // console.log(sqlParams)
  const sql = `SELECT * FROM user WHERE account = ?`
  db(sql, sqlParams)
    .then(result => {
      //访客账号
      if (result.length > 0 && sqlParams != 'admin') {
        console.log('账号已存在且通过')
        //给前端返回token
        const user = {
          ...result[0],
          password: '',
          create_time: ''
        }

        const tokenStr = jwt.sign(user, jwtConfig.jwtSecretKey, {
          expiresIn: '24h'
        })
        user.token = tokenStr;
        console.log(user)
        res.send({
          result: user,
          message: '登录成功',
          token: 'Bearer ' + tokenStr,
        })
      }
      //如果是管理员
      else if (sqlParams === 'admin') {
        console.log('管理员账号通过')
        //给前端返回token
        res.send({
          message: '请输入密码',
        })

      }
      //账号不存在
      else {
        console.log('注册并通过')
        const date = new Date()
        const sqlIns = `INSERT INTO user(account,create_time) VALUES (?,?)`
        db(sqlIns, [sqlParams, date])
          .then(resultt => {
            db(`SELECT * FROM user WHERE account = ?`, sqlParams)
              .then(resu => {
                const user = {
                  ...resu[0],
                  password: '',
                  create_time: ''
                }
                const tokenStr = jwt.sign(user, jwtConfig.jwtSecretKey, {
                  expiresIn: '24h'
                })

                res.send({
                  result: resu[0],
                  message: '登录成功',
                  token: 'Bearer ' + tokenStr,
                })
              })
          })
          .catch(err => console.log(err))

      }
    })
    .catch(err => console.log(err))
})

//管理员登录
router.get('/password', (req, res) => {
  const password = req.query.password
  const account = req.query.account
  const sql = `SELECT password FROM user WHERE account = ?`
  db(sql, account)
    .then(result => {
      if (result[0].password === password) {
        const user = {
          authorization: 1,
          account: 'admin',
          password: '',
          create_time: '',
          id: 1,
          token: ''
        }
        const tokenStr = jwt.sign(user, jwtConfig.jwtSecretKey, {
          expiresIn: '24h'
        })
        user.token = tokenStr;
        res.send({
          result: user,
          message: '密码正确',
          token: 'Bearer ' + tokenStr
        })
      }
      else {
        res.send({
          message: '密码错误'
        })
      }
    })
    .catch(err => console.log(err))
})


module.exports = router