import express from "express"
import dotenv from "dotenv"

dotenv.config()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const port = process.env.PORT || 3001

const cors = require('cors');
app.use(cors());

const api = require('./routes/init')
app.use('/api', api)

app.listen(port, () => {
  console.log(`
  ################################################
      🛡️  Server listening on port: ${port}  🛡️
  ################################################`)
})