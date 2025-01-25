'use server'

import prisma from "@/lib/prisma"

export async function getUsers() {
    const users = await prisma.users.findMany()
    return users
}
