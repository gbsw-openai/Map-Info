import { PrismaClient } from "@prisma/client"

let cachedConnect: PrismaClient | undefined

export const createDBconnection = () => {
  if (cachedConnect) {
    console.log('Already Connected!')
    return cachedConnect
  }
  console.log('Connecting..')
  
  const connection = new PrismaClient()
  cachedConnect = connection
  
  return connection
}
