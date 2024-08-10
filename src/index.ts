
import app from "./app";

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`MAHAM app IS RUNNING on port ${port}`);
});







/*

import {Prisma,PrismaClient} from "@prisma/client"
import express from "express"

const prisma = new PrismaClient()
const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// get all sellers rigistered inside our database
app.get('/sellers', async (req, res) => {
  const sellers = await prisma.seller.findMany()
  res.json(sellers)
})

// register new seller
app.post(`/seller/register`, async (req, res) => {
  //console.log(req.body)
  
  const { name, email, mobile , address } = req.body
  const result = await prisma.seller.create({ 
      data :{
        name,
      email,
      mobile,
      address
      }
    }
  )
  res.json(result)
  
 //res.send("successfully added new seller! ")
})


app.listen(port, () => {
  console.log(`MAHAM  app IS RUNNING  on port ${port}`)
})


*/