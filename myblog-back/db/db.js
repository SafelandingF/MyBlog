const mysql = require('mysql2')
const config = require('../config').db


exports.db = (sql, sqlParams) => {
  sqlParams = sqlParams || []
  return new Promise((resolve, reject) => {
    const pool = mysql.createPool(config)

    console.log('db connected')

    pool.getConnection((err, conn) => {
      if (!err) {
        conn.query(sql, sqlParams, (err, result) => {
          if (err) {
            console.log(err)
            reject(err)
          } else {
            resolve(result)
          }
        })
      } else {
        console.log('connection-err', err)
      }
    })
  })
}
