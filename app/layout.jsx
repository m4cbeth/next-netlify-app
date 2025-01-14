'use client';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { createContext, useEffect } from 'react';
import '/styles/globals.css'
import { useState } from 'react'
import { Switch } from '/components/ui/switch'
import { FaMoon, FaSun } from 'react-icons/fa'
import Link from 'next/link'
import session from '@/lib/session';

export const ThemeContext = createContext()
export const AuthContext = createContext()


export default function Rootlayout({ children }) {
    const [theme, setTheme] = useState(1)
    const themes = ['lofi', 'black', 'synthwave']
    const changeTheme = () => { theme > 0 ? setTheme(0) : setTheme(1) }
    const setSynth = () =>  setTheme(2)
    
    useEffect(()=>{
        const sessionToken = session()
    }, [])
    

    useEffect(() => {
        AOS.init({
            startEvent: 'DOMContentLoaded',
            duration: 1000,
            once: true,
        });
    }, []);

    return (
        <html lang="en" data-theme={themes[theme]}>
            <AuthContext.Provider value={false}>
                <ThemeContext.Provider value={theme}>
                    <head>
                        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                        <link rel="icon" href="/favicon.svg" sizes="any" />
                    </head>
                    <body className="h-screen w-screen relative">
                        {/* HEADER */}
                        <div className={`flex items-end justify-around p-0 top-0 sticky ${theme ? "bg-black" : "bg-white"} z-[99999999999999999]`}>
                            <Link className='no-underline  pr-2 lg:pr-5 lg:pl-5' href="/">
                                <div className="font-extralight text-3xl hover:text-secondary transition ease-out pb-2">
                                    JW
                                </div>
                            </Link>
                            <div className="flex-1 md:text-lg pb-2">
                                <div className="w-full align-text-bottom inline-block pb-1 md:pb-0 text-nowrap">
                                          <Link href="/"        className="hover:text-accent">HOME</Link > &nbsp;|
                                    &nbsp;<Link href="/about"   className="hover:text-accent">ABOUT</Link > &nbsp;|
                                    &nbsp;<Link href="/contact" className="hover:text-accent">CONTACT</Link >
                                </div>
                            </div>
                            <div className="flex items-center gap-2 scale-75 lg:scale-100 pr-3 py-2">
                                {
                                    theme === 0 ?
                                    <FaSun data-aos="fade-down" className='text-3xl hover:cursor-pointer' onClick={() => setSynth()} />:
                                    <FaMoon data-aos="fade-up" className='text-3xl hover:cursor-pointer' onClick={() => setSynth()} />
                                }
                                <div>
                                    <Switch defaultChecked="true" onCheckedChange={() => changeTheme()} />
                                </div>
                            </div>
                            {/* <div className="flex m-auto">
                                <div>
                                    <button className="btn btn-primary btn-outline ml-5">
                                        Sign In/Up
                                    </button>
                                </div>
                            </div> */}
                        </div>
                        {/* MAIN BODY */}
                        <div>
                            {children}
                        </div>
                    </body>
                </ThemeContext.Provider>
            </AuthContext.Provider>
        </html>
    )
}