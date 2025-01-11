'use client';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Switch } from '/components/ui/switch'
import { FaMoon, FaSun } from 'react-icons/fa'
import Link from 'next/link'
import { ThemeContext } from '@/app/layout'
import { useContext, useEffect } from 'react'

export default function NavHeader () {
    const theme = useContext(ThemeContext)
    useEffect(() => {
        AOS.init({
            startEvent: 'DOMContentLoaded',
            duration: 1000,
            once: true,
        });
    }, []);
    
    return (
        <div className='flex items-end justify-around p-0'>
            <Link className='no-underline  pr-2 lg:pr-5 lg:pl-5' href="/">
                <div className="font-extralight text-3xl hover:text-secondary transition ease-out">
                    JW
                </div>
            </Link>
            <div className="flex-1 md:text-lg">
                <div className="w-full align-text-bottom inline-block pb-1 md:pb-0 text-nowrap">
                            <Link href="/"        className="hover:text-accent">HOME</Link > &nbsp;|
                    &nbsp;<Link href="/about"   className="hover:text-accent">ABOUT</Link > &nbsp;|
                    &nbsp;<Link href="/contact" className="hover:text-accent">CONTACT</Link >
                </div>
            </div>
            <div className="flex items-center gap-2 scale-75 lg:scale-100 pr-3 pt-2">
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
    )
}