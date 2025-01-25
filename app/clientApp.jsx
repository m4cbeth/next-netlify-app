'use client'
import {useState, createContext} from 'react'
import Link from 'next/link'
import SignInButton from '@/components/made-components/signinbutton'
import { signOut } from "next-auth/react"
import { Button } from '@/components/ui/button'
import { Sun, Moon } from 'lucide-react'

export const ThemeContext = createContext()


export default function ClientRootLayout({ children, session }) {

    const [theme, setTheme] = useState(1)
    const themes = ['lofi', 'black', 'synthwave']
    const changeTheme = () => { theme > 0 ? setTheme(0) : setTheme(1) }
    const setSynth = () =>  setTheme(2)

    return (
    <html lang="en" data-theme={themes[theme]}>
    <ThemeContext.Provider value={theme}>
                <head>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <link rel="icon" href="/favicon.svg" sizes="any" />
                </head>
                <body className="w-full relative flex flex-col justify-normal ">
                    <div className='no-overflow min-h-screen flex-col items-end '>
    {/* HEADER */}
                        <div className={`flex items-center justify-start top-0 sticky ${theme ? "bg-black" : "bg-white"} z-[99999999999]`}>
                            <Link className='no-underline  pr-2 lg:pr-5 lg:pl-5' href="/">
                                <div className="font-extralight text-3xl hover:text-secondary transition ease-out pb-2">
                                    JW
                                </div>
                            </Link>
                            <div className="flex-1 pb-2 ">
                                <div className="md:inline-block hidden">
                                    <NavMenuItems/>
                                </div>
                            </div>
                            <div>
                            <Button onClick={()=>changeTheme()} variant="outline" size="icon" className={theme ? `bg-black` : 'bg-white'}>
                                <Sun className={`h-[1.2rem] w-[1.2rem] rotate-0 transition-all ${theme ? "scale-0 rotate-0" : "scale-100"}`} />
                                <Moon className={`absolute h-[1.2rem] w-[1.2rem] transition-all ${theme ? "scale-100 rotate-0 " : "rotate-90 scale-0"}`} />
                                <span className="sr-only">Toggle theme</span>
                            </Button>
                            </div>
                            <div className="pr-2 lg:pr-10 my-2 ml-3">
                                {!!session ? 
                                <SignOut /> :
                                <SignInButton />}
                            </div>
                            <div>
                                {!!session ?
                                <img className='rounded-full pr-5' src={session.user.image} width={50} height={50} alt={session.user.name}/> :
                                ""
                                }
                            </div>
                        </div>
   {/* MAIN BODY */}
                        <div className='flex-1'>
                            {/* <pre>{!session ? session : `${JSON.stringify(userData, 0, 9)}`}</pre> */}
                            {children}
                        </div>
    {/* FOOTER */}
                        <div className={`${ theme ? "bg-black" : "bg-white" } md:py-10 mb-16 md:mb-0 shadow-lg flex justify-center py-3 mt-16 bottom-0 w-full`}>
                            &copy;{(new Date).toString().slice(10,15)} Jaren Whitehouse
                        </div>
                    </div>
{/* MOBILE BOTTOM NAV */}
                    <div className={`${!theme && "text-white "} md:hidden py-5 sticky bottom-0 w-full bg-slate-950 z-[9999999999999] flex justify-center align-middle`}>
                        <NavMenuItems className="py-10" />
                    </div>
                </body>
    </ThemeContext.Provider>
    </html>
    )
}

const SignOut = () => (
    <button onClick={()=>signOut({ callbackUrl: '/' })} className='btn btn-outline rounded-lg'>Sign Out</button>
)


const NavMenuItems = () => (
    <div className="md:pb-0 text-nowrap">
        <Link href="/"        className="no-underline text-lg md:text-lg hover:text-accent">HOME</Link > &nbsp;| &nbsp;
        <Link href="/about"   className="no-underline text-lg md:text-lg hover:text-accent">ABOUT</Link > &nbsp;| &nbsp;
        <Link href="/projects"   className="no-underline text-lg md:text-lg hover:text-accent">PROJECTS</Link > &nbsp;| &nbsp;
        <Link href="/contact" className="no-underline text-lg md:text-lg hover:text-accent">CONTACT</Link >
    </div>
)

