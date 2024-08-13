import { PrismaClient } from "@prisma/client"

declare global {
  var prisma: PrismaClient | undefined
}

export const db = globalThis.prisma || new PrismaClient()

if (process.env.NODE_ENV !== "production") {
  globalThis.prisma = db
}
// In summary, this code ensures that your application uses a single, shared instance of the PrismaClient to interact with the database, especially during development. This helps prevent creating multiple unnecessary database connections, which can be inefficient.
