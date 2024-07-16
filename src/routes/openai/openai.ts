import { Router } from "express"

const router: Router = Router()
const openaiController = require('../../api/openai/openai.controller')

router.post('/ask', openaiController.ask_chatgpt)

module.exports = router