import { Request, Response } from "express"

const openaiService = require('./openai.service')

const ask = async (req: Request, res: Response) => {
  const service = await openaiService.ask(req.body)

  res.status(200).json(service)
}

module.exports = { ask }