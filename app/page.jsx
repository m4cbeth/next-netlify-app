'use client';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Image from 'next/image';
import { Card } from 'components/card';
import { TextGenerateEffect as TylerText } from '@/components/ui/text-generate-effect';


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
            <div className="TOPBAR container flex flex-row justify-between mx-auto px-4">
                <div>
                    <h1 data-aos="fade-right" className="text-9xl mb-0 font-bold">
                        Hi!
                    </h1>
                    <h2 data-aos="fade-left" className="text-4xl font-black">
                        I'm Jaren
                    </h2>
                </div>
                <Card />
                <div>
                    <Image width="200" height="200" src="/images/jaren.jpg" alt="Jaren" className="rounded-full" />
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