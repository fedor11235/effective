import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function createUser(data) {
  const user = await prisma.history.create({
    data: {
      ...data,
      action: 'create',
    },
  })
  return user;
}

export async function updateUser(id, data) {
  const user = await prisma.history.update({
    where: { id },
    data: data
  })
  return user;
}

export async function getHistory() {
  const users = await prisma.history.findMany()
  return users;
}

