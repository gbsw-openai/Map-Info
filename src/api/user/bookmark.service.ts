import { createDBconnection } from '../../db.config'
import { BookmarkDto } from '../../models/bookmarkModel'
import { Bookmark } from '../../entities/bookmark.entity'

const prisma = createDBconnection()

const create = async (bookmark: BookmarkDto) => {
  const { name, address, user_id } = bookmark

  const createQry = await prisma.bookmark.create({
    data: { name, address, userId: user_id }
  })

  return { status: 201, message: createQry }
}

const read = async (userId: string) => {

  const readQry = await prisma.bookmark.findMany({
    where: { userId }
  })

  return { status: 200, qry: readQry }
}

const remove = async (bookmark: BookmarkDto) => {
  const { address, user_id } = bookmark

  const deleteQry = await prisma.bookmark.delete({
    where: {
      userId_address: {
        userId: user_id,
        address: address,
      },
    }
  })

  return { status: 204, message: deleteQry}
}
export { create, read, remove}