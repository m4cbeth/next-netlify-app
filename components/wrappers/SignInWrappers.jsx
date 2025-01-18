"use server"
import { SignInWithGithub, SignInWithGoogle } from "@/components/sign-in";


export async function SignInGithubWrapped() {
    "use server"
    return <SignInWithGithub />
}
export async function SignInGoogleWrapped() {
    "use server"    
    return <SignInWithGoogle />
}