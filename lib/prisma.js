import { Pool } from '@pg'
import { PrismaPg } from '@prisma/adapter-pg'
import { PrismaClient } from '@prisma/client'





export default prisma












// import { withAccelerate } from '@prisma/extension-accelerate'
// // Using global for storing the Prisma instance in development (for hot-reloading purposes)
// if (process.env.NODE_ENV !== 'production') {
//   prisma = new PrismaClient().$extends(withAccelerate())
// } else {
//   if (!global.prisma) {
//     global.prisma = new PrismaClient().$extends(withAccelerate())
//   }
//   prisma = global.prisma
// }
