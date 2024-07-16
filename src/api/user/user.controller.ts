import { Request, Response } from 'express'
import { User } from '../../entities/user.entity'

const userService = require('./user.service')

const register = async (req: Request, res: Response) => {
  const user: User = req.body
  const service = await userService.create(user)

  res.json(service)
}

const login = async (req: Request, res: Response) => {
  const user: User = req.body
  const service = await userService.login(user)

  res.json(service)
}

const range = async (req: Request, res: Response) => {
  const service = await userService.take(+req.params.idx)

  res.json(service)
}

const get = async (req: Request, res: Response) => {
  const service = await userService.get(+req.params.idx)

  res.json(service)
}

const picture = async (req: Request, res: Response) => {
  const service = await userService.updateUserPic(+req.params.idx, req.file?.path)

  res.status(201).json(service)
}

module.exports = { register, login, range, get, picture }