const express = require('express')
const router = express.Router()
const db = require('../db/db').db

router.get('/getnote', async (req, res) => {
  const sql = `
  select note_id,title,description from note
  `
  const data = await db(sql)
  console.log(data)
  //! 异步方法的.map 这里很重要
  const result = await Promise.all(
    data.map(async item => {
      const note_id = item.note_id
      const sqlTag = `
        select tag from tags where note_id = ${note_id}
      `
      const tagData = await db(sqlTag)
      item.tags = tagData
      return item
    }
    )
  )
  res.send({
    message: 'success',
    data: result
  })
})

router.get('/getnotedetail', (req, res) => {
  const { note_id } = req.query
  const sql = `
  select * from note where note_id = ${note_id}
  `
  db(sql)
    .then(data => {
      res.send({
        message: 'success',
        data: data
      })
    })
    .catch(err => {
      res.send({
        message: 'fail',
      })
    }
    )
})



router.post('/addtag', (req, res) => {
  const { tag, note_id } = req.body
  const sql = `
  insert into tags (tag,note_id) values ('${tag}','${note_id}')
  `
  db(sql)
    .then(data => {
      res.send({
        message: 'success',
      })
    })
    .catch(err => {
      res.send({
        message: 'fail',
      })
    })
})



router.post('/addnote', (req, res) => {
  const { title, description, note } = req.body
  const Tnote = note.replace(/'/g, "\\'").replace(/"/g, '\\"')
  const sql = `
  insert into note (title,note,description) values ('${title}','${description}','${Tnote}')
  `
  db(sql)
    .then(data => {
      res.send({
        message: 'success',
      })
    })
    .catch(err => {
      res.send({
        message: 'fail',
      })
    })
})

router.post('/editnote', (req, res) => {
  const { title, description, note, note_id } = req.body
  const Tnote = note.replace(/'/g, "\\'").replace(/"/g, '\\"')
  const sql = `
    update note set title = '${title}',note = "${Tnote}",description = '${description}' where note_id = ${note_id}
  `
  db(sql)
    .then(data => {
      res.send({
        message: 'success',
      })
    })
    .catch(err => {
      res.send({
        message: 'fail',
      })
    })
})

router.get('/getnotetag', (req, res) => {
  const { note_id } = req.query
  const sql =
    `
    select tag from tags where note_id = ${note_id}
    `

  db(sql)
    .then(result => {
      res.send({
        message: '查询成功',
        data: result
      })
    })
    .catch(err => {
      res.send({
        message: '查询失败',
        err: err
      })
    })
})


module.exports = router