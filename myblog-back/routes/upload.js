const express = require('express')
const router = express.Router()
const db = require('../db/db').db

const fs = require('fs')
const os = require('os')
const path = require('path')
const formidable = require('formidable').Formidable


// check os
const isWindows = os.type().toLowerCase().indexOf('windows')
const TMP_FOLDER = 'upload-files-tmp'
const FILE_FOLDER = 'upload-files'

/**
 * 获取随机数
 */
const getRandom = () => {
  return Math.random().toString(36).slice(-3)
}

/**
 * 给文件名加后缀，如 a.png 转换为 a-123123.png
 * @param {string} fileName 文件名
 */
const genRandomFileName = (fileName = '') => {
  const r = getRandom()
  if (!fileName) return r
  console.log('fileName', fileName)
  const length = fileName.length
  const pointLastIndexOf = fileName.lastIndexOf('.')
  if (pointLastIndexOf < 0) return `${fileName}-${r}`
  const fileNameWithOutExt = fileName.slice(0, pointLastIndexOf)
  const ext = fileName.slice(pointLastIndexOf + 1, length)
  const trueName = `${fileNameWithOutExt}-${r}.${ext}`
  console.log('trueName', trueName)
  return trueName
}

//遍历对象并进行处理
const objForEach = (obj, fn) => {
  let key, result
  for (key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      result = fn.call(obj, key, obj[key])
      if (result === false) {
        break
      }
    }
  }
}

const saveFiles = (req, time = 0) => {
  return new Promise((reslove, rejects) => {
    const imgLinks = []
    const form = new formidable({ multiples: true })
    if (isWindows) {
      const tmpPath = path.resolve(__dirname, '..', 'public', TMP_FOLDER)
      if (!fs.existsSync(tmpPath)) {
        fs.mkdirSync(tmpPath)
      }
      form.uploadDir = TMP_FOLDER
    }

    form.parse(req, (err, fields, files) => {
      console.log(files)
      if (err) {
        rejects('formidable, form.parse err', err.stack)
      }
      // 存储图片的文件夹
      const storePath = path.resolve(__dirname, '..', 'public', FILE_FOLDER)
      if (!fs.existsSync(storePath)) {
        fs.mkdirSync(storePath)
      }
      // console.log('fields......', fields)
      objForEach(files, (name, file) => {
        console.log('name', name)
        // console.log(file)
        const tempFilePath = file[0].filepath
        const fileName = genRandomFileName(file[0].originalFilename || file[0].name || file)
        console.log('fileName', fileName)
        const fullFillName = path.resolve(storePath, fileName)
        console.log('fullFillName', fullFillName)
        console.log('file rename', tempFilePath)
        fs.renameSync(tempFilePath, fullFillName)
        console.log('file saved\n')
        const url = `http://localhost:3000/${FILE_FOLDER}/${fileName}`
        imgLinks.push({ url: url, alt: fileName, href: url })
        console.log('imgLinks', imgLinks)
        let data
        if (imgLinks.length === 1) {
          data = imgLinks[0]
        } else {
          data = imgLinks
        }
        reslove({
          errno: 0,
          data: data
        })

      })
    })

  })
}


router.post('/upload-image', async (req, res) => {
  try {
    const data = await saveFiles(req)
    res.send(data)
  } catch (err) {
    console.log(err)
  }
})







module.exports = router