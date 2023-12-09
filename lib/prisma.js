import { PrismaClient } from '@prisma/client';

// help access database using global variable prisma
let prisma;

// sets up variable prisma to be used in our API to make calls
// to the database
if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  prisma = global.prisma;
}

export default prisma;