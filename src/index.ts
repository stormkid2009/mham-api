import {Prisma,PrismaClient} from "@prisma/client"
import express from "express"

const prisma = new PrismaClient()
const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`MAHAM  app IS RUNNING  on port ${port}`)
})