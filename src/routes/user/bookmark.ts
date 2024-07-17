import { Router } from "express"

const router: Router = Router()
const userController = require('../../api/user/bookmark.controller')

router.post('/add', userController.add)
router.get('/:id', userController.get)
router.delete('/remove', userController.remove)

module.exports = router