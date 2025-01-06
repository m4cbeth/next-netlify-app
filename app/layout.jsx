'use client';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import '/styles/globals.css'
import { useState } from 'react'
import { Switch } from '/components/ui/switch'
import { FaMoon, FaSun } from 'react-icons/fa'

export default function Rootlayout({ children }) {

    const [theme, setTheme] = useState(1)
    const themes = ['lofi', 'black', 'synthwave']
    const changeTheme = () => { theme > 0 ? setTheme(0) : setTheme(1) }
    const setSynth = () => setTheme(2)


    useEffect(() => {
        AOS.init({
            startEvent: 'DOMContentLoaded',
            duration: 1000,
            once: true,
        });
    }, []);
    return (
        <html lang="en" data-theme={themes[theme]}>
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="icon" href="/favicon.svg" sizes="any" />
            </head>
            <body className="h-screen">                
                <div className='flex gap-3 items-center justify-between p-1 md:p-4'>
                    <div className='flex font-bold'>
                        <div className="font-extralight text-2xl pr-5 hover:scale-150 hover:text-secondary transition ease-out">
                            JW
                        </div>
                        <div className="flex flex-col justify-end">
                            <span className="inline-block align-baseline hover:text-accent">HOME, ABOUT, CONTACT</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 scale-75 sm:scale-75 md:scale-75 lg:scale-75">
                        {
                            theme === 0 ?
                            <FaSun data-aos="fade-down" className='text-3xl hover:cursor-pointer' onClick={() => setSynth()} />:
                            <FaMoon data-aos="fade-up" className='text-3xl hover:cursor-pointer' onClick={() => setSynth()} />
                        }
                        <div className="">
                            <Switch defaultChecked="true" onCheckedChange={() => changeTheme()} />
                        </div>
                    </div>
                </div>
                {/* <div className="flex items-center justify-between w-full p-4">
                    <div className="flex-none">X</div>
                    <nav className="flex-grow text-center">
                        <ul className="flex justify-center space-x-4">
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                        </ul>
                    </nav>
                    <div className="flex-none border">DIV</div>
                </div> */}

                {children}
            </body>
        </html>
    )
}