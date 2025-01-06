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
    const setSynth = () => { setTheme(2) }


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
                <link rel="icon" href="/favicon.svg" sizes="any" />
            </head>
            <body className="h-screen">                
                <div className='grid grid-flow-col gap-3 items-center justify-end p-4'>
                    {
                        theme === 0 ?
                        <FaSun data-aos="fade-down" className='hover:cursor-pointer text-3xl' onClick={() => setSynth()} />:
                        <FaMoon data-aos="fade-up" className='hover:cursor-pointer text-3xl' onClick={() => setSynth()} />
                    }
                    <Switch defaultChecked="true" onCheckedChange={() => changeTheme()} />
                </div>
                {children}
            </body>
        </html>
    )
}