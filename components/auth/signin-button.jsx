"use client"
import { signIn } from "next-auth/react"
 
export function SignInWithGithub() {
  return <button onClick={() => signIn('github')}>Sign In With Github</button>
}
export function SignInWithGoogle() {
  return <button onClick={() => signIn('google')}>Sign In with Google</button>
}