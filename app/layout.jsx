'use client';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { createContext, useEffect } from 'react';
import '/styles/globals.css'
import { useState } from 'react'
import { Switch } from '/components/ui/switch'
import { FaMoon, FaSun } from 'react-icons/fa'
import Link from 'next/link'
import SignInButton from '@/components/made-components/signinbutton';
import { useSession, SessionProvider } from 'next-auth/react';
import { signOut } from "next-auth/react"


export const ThemeContext = createContext()

export default function AuthAppWrap({ children }) {
    return (
        <SessionProvider>
            <Rootlayout>
                {children}
            </Rootlayout>
        </SessionProvider>
    )
}

function Rootlayout({ children }) {
    const { data: session } = useSession()

    const [theme, setTheme] = useState(1)
    const themes = ['lofi', 'black', 'synthwave']
    const changeTheme = () => { theme > 0 ? setTheme(0) : setTheme(1) }
    const setSynth = () =>  setTheme(2)
    
    // AOS INIT
    useEffect(() => {
        AOS.init({
            startEvent: 'DOMContentLoaded',
            duration: 1000,
            once: true,
        });
    }, []);

    return (
        <html lang="en" data-theme={themes[theme]}>
            <ThemeContext.Provider value={theme}>
                <head>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <link rel="icon" href="/favicon.svg" sizes="any" />
                </head>
                <body className="h-screen w-screen relative flex flex-col justify-normal ">
                    <div className='no-overflow'>
                        {/* HEADER */}
                        <div className={`flex items-center justify-start top-0 sticky ${theme ? "bg-black" : "bg-white"} z-[99999999999999999]`}>
                            <Link className='no-underline  pr-2 lg:pr-5 lg:pl-5' href="/">
                                <div className="font-extralight text-3xl hover:text-secondary transition ease-out pb-2">
                                    JW
                                </div>
                            </Link>
                            <div className="flex-1 pb-2 ">
                                <div className=" pb-1 md:pb-0 text-nowrap">
                                    <Link href="/"        className="no-underline text-xs md:text-lg hover:text-accent">HOME</Link > &nbsp;| &nbsp;
                                    <Link href="/about"   className="no-underline text-xs md:text-lg hover:text-accent">ABOUT</Link > &nbsp;| &nbsp;
                                    <Link href="/contact" className="no-underline text-xs md:text-lg hover:text-accent">CONTACT</Link >
                                </div> 
                            </div>
                            <div className="flex items-center gap-2 lg:scale-100 pr-3 py-2">
                                {
                                    theme === 0 ?
                                    <FaSun data-aos="fade-down" className='text-xl hover:cursor-pointer' onClick={() => setSynth()} />:
                                    <FaMoon data-aos="fade-up" className='text-xl hover:cursor-pointer' onClick={() => setSynth()} />
                                }
                                <div>
                                    <Switch defaultChecked="true" onCheckedChange={() => changeTheme()} />
                                </div>
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
                        <div>
                            {children}
                        </div>


                        {/* FOOTER */}
                        <div className={`${ theme ? "bg-black" : "bg-white" } shadow-lg flex justify-center py-5 mt-16 bottom-0 w-full`}>
                            &copy;{(new Date).toString().slice(10,15)} Jaren Whitehouse
                        </div>


                    </div>
                </body>
            </ThemeContext.Provider>
        </html>
    )
}

const SignOut = () => (
    <button onClick={()=>signOut()} className='btn btn-outline'>Sign Out</button>
)


