const express = require('express')
const router = express.Router()
const db = require('../db/db').db


router.get('/getarticle', (req, res) => {
  const sql = `
  select article_id,imageUrl,title,description from article;
  `
  db(sql).
    then(result => {
      res.send({
        message: 'success',
        data: result
      })
    })
    .catch(err => {
      res.send({
        message: '查询文章失败'
      })
    }
    )
})
router.get('/getarticledetail', (req, res) => {
  const article_id = req.query.article_id
  const sql = `
  select * from article where article_id = ${article_id};
  `
  db(sql)
    .then(result => {
      res.send({
        message: 'success',
        data: result
      })
    })
    .catch(err => {
      res.send({
        message: '查询文章详情失败'
      })
    })

})
router.post('/addarticle', (req, res) => {
  const { title, description, imageUrl, article, categories } = req.body
  const Tarticle = note.replace(/'/g, "\\'").replace(/"/g, '\\"')
  const sql = `insert into article ( article,imageUrl,title,description,categories) values ('${Tarticle}','${imageUrl}','${title}','${description}',${categories});
  `
  db(sql)
    .then(result => {
      res.send({
        message: 'success'
      })
    })
    .catch(err => {
      res.send({
        message: '添加文章失败'
      })
    })
})
router.delete('/deletearticle', (req, res) => {
  const article_id = req.query.article_id
  const sql = `delete from article where article_id = ${article_id};
  `
  db(sql)
    .then(result => {
      res.send({
        message: 'success'
      })
    })
    .catch(err => {
      res.send({
        message: '删除文章失败'
      })
    })
})
router.post('/editarticle', (req, res) => {
  const { article_id, title, description, imageUrl, article, categories } = req.body
  const Tarticle = note.replace(/'/g, "\\'").replace(/"/g, '\\"')
  const sql = `update article set title = '${title}',description = '${description}',imageUrl = '${imageUrl}',article = '${Tarticle}',categories = ${categories} where article_id = ${article_id};
  `
  db(sql)
    .then(result => {
      res.send({
        message: 'success'
      })
    })
    .catch(err => {
      res.send({
        message: '修改文章失败'
      })
    })
})

module.exports = router