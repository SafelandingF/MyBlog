const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const db = require('../db/db').db
const jwtConfig = require('../jwt/config')


router.get('/getmessage', (req, res) => {
  const sql =
    `select  user.account ,message.* from user
      right join message
      on user.id = message.id;`
  db(sql, (err, result) => {
    if (err) {
      res.send({
        status: 500,
        message: '获取留言失败',
        data: err
      })
    } else {
      res.send({
        status: 200,
        message: '获取留言成功',
        data: result
      })
    }
  })
})

router.post('/addmessage', (req, res) => {
  const { message, id } = req.body
  const sql = `
  insert into message (id,message) 
  values (${id},'${message}')
  `
  db(sql, (err, result) => {
    if (err) {
      res.send({
        status: 500,
        message: '留言失败',
        data: err
      })
    }
    else {
      res.send({
        status: 200,
        message: '留言成功',
      })
    }
  })
})


router.get('/getcomment', (req, res) => {
  const messageId = req.query.messageId
  const sql =
    `
  select user.account,message.message_id,comment.comment 
  from (
    message right join comment 
    on message.message_id = comment.message_id
  )
    left join user 
    on user.id = comment.id
    where message.message_id = ${messageId}
  `
  db(sql, (err, result) => {
    if (err) {
      res.send({
        status: 500,
        message: '获取评论失败',
        data: err
      })
    } else {
      res.send({
        status: 200,
        message: '获取评论成功',
        data: result
      })
    }
  })
})

router.post('/addcomment', (req, res) => {
  const { comment, messageId } = req.body
  const sql = `
  insert into comment (message_id,comment) 
  values (${messageId},'${comment}')
  `
  db(sql, (err, result) => {
    if (err) {
      console.log(err)
      res.send({
        status: 500,
        message: '评论失败',
      })
    }
    else {
      res.send({
        status: 200,
        message: '评论成功',
      })
    }
  })
})

router.post('/like', (req, res) => {
  const { messageId, like, dislike } = req.body
  const sql = `
  update message set \`like\` = ${like},dislike = ${dislike} where message_id = ${messageId}
  `
  db(sql, (err, result) => {
    if (err) {
      res.send({
        status: 500,
        message: '点赞失败',
        data: err
      })
    } else {
      res.send({
        status: 200,
        message: '点赞成功',
        like: like,
        dislike: dislike,
      })
    }
  })
})



module.exports = router