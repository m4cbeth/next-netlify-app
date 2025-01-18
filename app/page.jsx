'use client';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Link from 'next/link';
import HeroSection from '/components/made-components/hero-section';
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
            <title>Jaren Whitehouse's Portfolio</title>
            <h1  data-aos="fade-left" className="lg:text-6xl mb-0 ml-3">
                Hello, &#36;&#123; !Jaren &#125;!
            </h1>
            <section className='border-t-[1px]'>
                <div data-aos="fade" data-aos-duration="3000">
                    <HeroSection />
                </div>
                <div className={`HEROSECTION text-white pb-10 min flex md:flex-row flex-col-reverse justify-center bg-gradient-to-tl to-indigo-500 ${!theme? "from-neutral-800":"from-purple-500"}`}>
                    
                        <div className=" flex-1 pl-2 md:pl-20 me:p-0 flex justify-center md:justify-end">
                            <div className="max-w-xl px-10">
                                <h2
                                data-aos="fade-right"
                                className="text-4xl mt-10">
                                    But You and Me,
                                    <br />
                                    are gonna shake it up
                                </h2>
                        
                                <div 
                                data-aos="fade-left"
                                >
                                    <p className="max-w-lg pt-5" >
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque corrupti vitae ipsum consequuntur? Rem maxime blanditiis perspiciatis, quae beatae corporis fuga, eos porro ut soluta, temporibus ducimus earum odit laborum.
                                    </p>
                                </div>
                                <div 
                                data-aos="fade-right"
                                >
                                    <p className="max-w-lg pt-5" >
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque corrupti vitae ipsum consequuntur? Rem maxime blanditiis perspiciatis, quae beatae corporis fuga, eos porro ut soluta, temporibus ducimus earum odit laborum.
                                    </p>
                                </div>
                            </div>
                  
                    </div>
                    <div className="flex-1 flex items-center justify-center md:justify-start relative">
                        <div className="text-9xl grid grid-flow-col justify-end place-items-center p-0">
                            <div data-aos="fade-right" className='z-10'>
                                <div className="translate-x-200 translate-y-4 z-30 rotate-6">😅</div>
                            </div>
                            <div data-aos="fade-down" className="absolute">
                                <div className="-translate-y-20 ">🧑‍💻</div>
                            </div>
                            <div data-aos="fade-left">
                                <div className="-translate-x-200 -rotate-12">🌞</div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </section>
        </div>
    )
}