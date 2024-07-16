interface UserDto {
  id: string
  password: string
  email: string
  userPic: Express.Multer.File
}

export { UserDto }