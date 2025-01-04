'use client';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Image from 'next/image';
import { Card } from 'components/card';


export default function Page({ children }) {
    useEffect(() => {
        AOS.init({
            startEvent: 'DOMContentLoaded',
            duration: 1000,
            once: true,
        });
    }, []);
    return (
        <div className="container flex flex-row justify-between mx-auto px-4">
            <div>
                <h1 data-aos="fade-right" className="text-9xl mb-0 font-bold">
                    Hi!
                </h1>
                <h2 data-aos="fade-left" className="text-4xl font-bold">
                    I'm Jaren
                </h2>
            </div>
            <Card />
            <div>
                <Image width="200" height="200" src="/images/jaren.jpg" alt="Jaren" className="rounded-full" /> 
            </div>
        </div>
    )
}