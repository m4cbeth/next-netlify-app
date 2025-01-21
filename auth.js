import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import Google from "next-auth/providers/google"
import Instagram from "next-auth/providers/instagram"
import { DiGhost } from "react-icons/di"


export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [GitHub, Google, Instagram],
  callbacks: {
      async signIn({user, account, profile}) {
        // SEE NOTE BELOW ON THIS POSTGRESS URL
        const postgresurl = `${process.env.POSTGRES_URL}/api/users`
        const url = `${process.env.NODE_ENV === "development" ? "http://localhost:3001" : "https://expressapp-cjlk.onrender.com"}/signin`
        // const url = "https://expressapp-cjlk.onrender.com/signin"
        const options = {
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
        }
        try {
          const response = await fetch(url, options)
          if (!response.ok) {
            console.error('failed to post to db')
            return true
          } else {
            // const data = await response.json()
            // console.log(data.user)
            // ^^^ this is a great value to store into state somewhere! Global user context, alongside the auth context!
            // but can't store to data here, this is outside react... Do this same fetch in a useSession!
          }
        } catch (err) {
          console.error(err)
          return true
        }
        return true
      }
  }
})

/*
NOTE TO SELF:
THE FETCH HERE....
      async signIn({user, account, profile}) {
        try {
          const response = await fetch(`${process.env.POSTGRES_URL}/api/users`
this could easily just go strait to a postgres url.
a straight up postgres://user:p455w0rd32423@host.com:4000 (or whatever)
because the value would be stored as an enivroment variable...
ON THE OTHER HAND
for now, I'm going to change it to try to aim at the EXPRESS API

*/


