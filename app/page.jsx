'use client';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Link from 'next/link';
import HeroSection from '/components/made-components/hero-section';
import { ProjectCarousel } from 'components/made-components/projectCarousel'
import { ThemeContext } from './layout';
import { useContext } from 'react';
export default function Page({ children }) {
    useEffect(() => {
            AOS.init({
                startEvent: 'DOMContentLoaded',
                duration: 1000,
                once: false,
            });
        }, []);
    const theme = useContext(ThemeContext)

    return (
        <div className='MAIN'>
            <h1  data-aos="fade-left" className="max-w-4xl mb-0 ml-9">
                Hello, Jaren!
            </h1>
            <section className='border-t-[1px]'>
                <div data-aos="fade" data-aos-duration="3000">
                    <HeroSection />
                    {/* <div className={`HEROSECTION text-black min-h-96 flex justify-center bg-gradient-to-br to-base-100 ${!theme? "from-neutral-800":"from-slate-100"}`}>
                        <div className="flex-1">
                            <div className="max-w-lg mx-auto">
                                <h2 
                                data-aos="fade-right" 
                                className="text-4xl mt-10">
                                    Heading 2
                                </h2>
                            </div>
                        </div>
                        <div className="flex-1"></div>
                    </div> */}
                </div>
                <div>
                    <Link href="/timezones">
                        <button className="transition hover:scale-125 mx-4 btn-outline border-2 rounded-lg mt-10 btn btn-large btn-primary">
                            Time Zones
                        </button>
                    </Link>
                    <Link href="/about">
                        <button className= "transition hover:scale-125 mx-4 btn-outline border-2 rounded-lg mt-10 btn btn-large btn-secondary">
                            <span className="text-white">About me</span>
                        </button>
                    </Link>
                    <Link href="/contact">
                        <button className="transition hover:scale-125 mx-4 btn-outline border-2 rounded-lg mt-10 btn btn-large btn-accent">
                            Say hello!
                        </button>
                    </Link>
                    <button className="transition hover:scale-125 mx-4 btn-outline border-2 rounded-lg mt-10 btn btn-large btn-neutral">BUTTON</button>
                </div>
                <div className="bg-slate-800 min-h-44 flex justify-center">
                    <div>hey</div>
                </div>
            </section>
        </div>
    )
}