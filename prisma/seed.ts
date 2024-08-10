import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient()

const sellerData: Prisma.SellerCreateInput[] = [
  {
    name: 'Alice',
    email: 'alice@google.com',
    mobile:'01000225789',
    address:'somewhere on earth',

    },
  {
    name: 'Ahmed',
    email: 'ahmed@google.com',
    mobile:'01100556789',
    address:'somewhere on earth',
  },
  {
    name: 'Ali',
    email: 'ali@google.com',
    mobile:'01200447789',
    address:'somewhere on earth'
}
]

async function main() {
  console.log(`Start seeding ...`)
  for (const u of sellerData) {
    const seller = await prisma.seller.create({
      data: u,
    })
    console.log(`Created seller with id: ${seller.id}`)
  }
  console.log(`Seeding finished.`)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })