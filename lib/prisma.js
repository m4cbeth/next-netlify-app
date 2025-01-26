import { PrismaClient } from '@prisma/client/edge'
// import { Pool } from 'pg'
// import { PrismaPg } from '@prisma/adapter-pg'
// const connectionString = `${process.env.DATABASE_URL}`
// const prismaInstance = () => {
//   const pool = new Pool({ connectionString })
//   const adapter = new PrismaPg(pool)
//   return new PrismaClient({ adapter })  
// }



// let prisma
// if (process.env.NODE_ENV !== 'production') {
//   prisma = new PrismaClient()
// } else {
//   if (!global.prisma) {
//     global.prisma = new PrismaClient()
//   }
//   prisma = global.prisma
// }

const prisma = new PrismaClient()

export default prisma












// import { withAccelerate } from '@prisma/extension-accelerate'
// // Using global for storing the Prisma instance in development (for hot-reloading purposes)

