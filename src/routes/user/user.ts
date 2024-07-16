import { Router } from "express"

const router: Router = Router()
const userController = require('../../api/user/user.controller')

router.post('/register', userController.register)
router.post('/login', userController.login)
router.get('/range/:idx', userController.range)
router.get('/:idx', userController.get)

module.exports = router