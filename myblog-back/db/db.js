const mysql = require('mysql2')
const config = require('../config').db



// 这里是先建立链接 再进行后续的处理
const pool = mysql.createPool(config)
exports.db = (sql, sqlParams) => {
  sqlParams = sqlParams || []
  return new Promise((resolve, reject) => {
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
      conn.release()
    })
  })
}
