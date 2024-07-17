import { Router } from "express"
import fs from "fs"
import multer from 'multer'
import path from 'path'

const router: Router = Router()
const userController = require('../../api/user/user.controller')

try {
  fs.readdirSync('uploads')
} catch (error) {
  console.error('uploads 폴더가 없어 uploads 폴더를 생성합니다.');
  fs.mkdirSync('uploads')
}

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, 'uploads/')
    },
    filename(req, file, done) {
      const ext = path.extname(file.originalname)
      done(null, Date.now() + ext)
    }
  }),
  limits: { fieldSize: 5 * 1024 * 1024},
})

router.post('/pic/:idx', upload.single('image'), function(req, res) {
  userController.picture
})

module.exports = router