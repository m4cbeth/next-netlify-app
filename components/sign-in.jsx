"use server"
import { signIn } from "@/auth"
 
export async function SignInWithGithub() {
  return (
    <form
      action={async () => {
        "use server"
        await signIn("github")
      }}
    >
      <button type="submit">Signin with Github</button>
    </form>
  )
} 


export async function SignInWithGoogle() {
  return (
    <form
      action={async () => {
        "use server"
        await signIn("google")
      }}
    >
      <button type="submit">Signin with Google</button>
    </form>
  )
} 