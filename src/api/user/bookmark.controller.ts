import { Request, Response } from 'express'
import { Bookmark } from '../../entities/bookmark.entity'

const bookmarkService = require('./bookmark.service')

const add = async (req: Request, res: Response) => {
  const bookmark: Bookmark = req.body

  const service = await bookmarkService.create(bookmark)

  res.json(service)
}

const get = async (req: Request, res: Response) => {
  const service = await bookmarkService.read(req.params.id)

  res.json(service)
}
const remove = async (req: Request, res: Response) => {
  const bookmark: Bookmark = req.body
  const service = await bookmarkService.remove(bookmark)

  res.json(service)
}

export { add, get, remove }