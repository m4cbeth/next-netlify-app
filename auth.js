import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import Google from "next-auth/providers/google"
import Instagram from "next-auth/providers/instagram"
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [GitHub, Google, Instagram],
  callbacks: {
      async signIn({user, account, profile}) {
        try {
          const response = await fetch(`${process.env.POSTGRES_URL}/api/users`, {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json;charset=UTF-8",
            },
            body: JSON.stringify({
              email: user.email,
              name: user.name,
              account: account,
              profile: profile,
            })
          })
          if (!response.ok) {
            console.error('failed to post to db')
            return true
          }
        } catch (err) {
          console.error(err)
          return true
        }
      }
  }
})