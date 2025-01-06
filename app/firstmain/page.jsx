'use client';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Image from 'next/image';
export default function Page({ children }) {

    useEffect(() => {
        AOS.init({
            startEvent: 'DOMContentLoaded',
            duration: 1000,
            once: true,
        });
    }, []);
    return (
        <div className="container flex flex-col">
            <div className="TOPBAR container flex flex-row justify-between mx-auto px-4 h-auto">
                <div>
                    <h1 data-aos="fade-down" className="text-9xl mb-0 font-bold">
                        <span>Hi!</span>
                    </h1>
                    <h2 data-aos="fade-left" className="text-4xl font-black">
                        <span>Im Jaren</span>
                    </h2>
                </div>
                <SynthGradCard />
                <div>
                    <Image data-aos="fade-up" width="200" height="200" src="/images/jaren.jpg" alt="Jaren" className="rounded-full" />
                </div>
            </div>
            <section>
                <h2 className='underline font-bold'>Some tech I know</h2>
                <p>maybe this should go on the coding page... this page more of a splash intro?</p>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Next</li>
                    <li>Tailwind</li>
                    <li>Postgres</li>
                    <li>Firebase</li>
                </ul>
            </section>
        </div>
    )
}



const SynthGradCard = () => {
    return (
    <div
        style={{
            border: '10px solid transparent',
            borderRadius: '20px',
            borderImage: 'linear-gradient(51deg, rgba(10,142,86,1) 0%, rgba(53,9,121,1) 31%, rgba(176,5,179,1) 63%, rgba(0,212,255,1) 100%)',
            borderImageSlice: 1,
        }}
        className="p-6 mx-16 flex-1"
    >
        Content with gradient border
      </div>
    );
  };