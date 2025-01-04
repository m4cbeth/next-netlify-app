'use client';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


export default function Page({ children }) {
    useEffect(() => {
        AOS.init({
            startEvent: 'DOMContentLoaded',
            duration: 1000,
            once: true,
        });
    }, []);
    return (
        <div className="container mx-auto px-4 justify-end">
            <h1 data-aos="fade-right" className="text-9xl font-bold text-right">
                Hi!
            </h1>
            <h2 data-aos="fade-left" className="text-4xl font-bold text-right">
                I'm Jaren
            </h2>
        </div>
)}