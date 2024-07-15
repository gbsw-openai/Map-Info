import { Router } from "express"

const router: Router = Router()
const userController = require('../../api/user/user.controller')

router.post('/register', userController.register)
router.post('/login', userController.login)
router.get('/:idx', userController.range)

module.exports = router