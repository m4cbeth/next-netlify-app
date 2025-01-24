import { PrismaClient } from '@prisma/client'
import { withAccelerate } from '@prisma/extension-accelerate'

const prisma = new PrismaClient().$extends(withAccelerate())

// Using global for storing the Prisma instance in development (for hot-reloading purposes)
if (process.env.NODE_ENV !== 'production') {
  global.prisma = prisma
}

export default prisma
