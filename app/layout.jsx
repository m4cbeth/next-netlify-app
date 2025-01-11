'use client'
import { createContext } from 'react';
import '/styles/globals.css'
import { useState } from 'react'
import NavHeader from '@/components/made-components/nav-header';


export const ThemeContext = createContext()

export default function Rootlayout({ children }) {

    const [theme, setTheme] = useState(1)
    const themes = ['lofi', 'black', 'synthwave']
    const changeTheme = () => { theme > 0 ? setTheme(0) : setTheme(1) }
    const setSynth = () => setTheme(2)

    

    return (
        <html lang="en" data-theme={themes[theme]}>
            <ThemeContext.Provider value={theme}>
                <head>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <link rel="icon" href="/favicon.svg" sizes="any" />
                </head>
                <body className="h-screen w-screen">
                    <NavHeader />
                    <div>{children}</div>
                </body>
            </ThemeContext.Provider>
        </html>
    )
}