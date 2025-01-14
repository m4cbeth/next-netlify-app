'use server'
import { auth } from 'auth.js'

export default async function session() {
    const session = await auth()
    return session
}