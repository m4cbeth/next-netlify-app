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
                once: true,
            });
        }, []);
    const theme = useContext(ThemeContext)

    return (
        <div className='MAIN'>
            <h1  data-aos="fade-left" className="max-w-4xl lg:text-8xl mb-0 ml-9">
                Hello, &#36;&#123;! Jaren &#125;!
            </h1>
            <section className='border-t-[1px]'>
                <div data-aos="fade" data-aos-duration="3000">
                    <HeroSection />
                </div>
                <div className={`HEROSECTION text-white min-h-96 flex md:flex-row flex-col-reverse justify-center bg-gradient-to-tl to-indigo-500 ${!theme? "from-neutral-800":"from-purple-500"}`}>
                    <div className="flex-1 pl-4 me:p-0">
                        <div className="max-w-xl mx-auto">
                            <h2 
                            data-aos="fade-right" 
                            className="text-4xl mt-10">
                                You and me
                                <br />
                                are gonna shake it up
                            </h2>
                            <p 
                            data-aos="fade-up"
                            >
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque corrupti vitae ipsum consequuntur? Rem maxime blanditiis perspiciatis, quae beatae corporis fuga, eos porro ut soluta, temporibus ducimus earum odit laborum.
                            </p>
                        </div>
                    </div>
                    <div className=" flex items-center justify-center">
                        <div className="text-9xl grid grid-flow-col justify-end place-items-center p-0">
                            <div data-aos="fade-right" className='z-10'>
                                <div className="translate-x-20 translate-y-4 z-30 rotate-6">😅</div>
                            </div>
                            <div data-aos="fade-down">
                                <div className="-translate-y-20 ">🧑‍💻</div>
                            </div>
                            <div data-aos="fade-left">
                                <div className="-translate-x-20 -rotate-12">🌞</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <Link href="/projects/timezones">
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