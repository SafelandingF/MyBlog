const express = require('express');
const router = express.Router();
const db = require('../db/db').db;
const jwt = require('jsonwebtoken');
router.get('/', (req, res) => {
  if (!req.headers.authorization) {
    res.status(401).json({
      message: 'Unauthorized',
    })
  } else {
    const token = req.headers.authorization.replace('Bearer ', '');
    jwt.verify(token, 'Safalanding', (err, decoded) => {
      if (err) {
        res.status(401).json({ message: 'Unauthorized' })
      }
      else {
        const { id } = decoded;
        const sql = `SELECT * FROM user WHERE id = ${id}`
        db(sql, (err, result) => {
          if (err) {
            res.send.status(500).json({ message: 'Internal Server Error' })
          } else {
            res.status(200).json({ message: 'success', data: result })
          }
        })
      }
    })
  }
})

module.exports = router;