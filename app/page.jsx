'use client';
import { useEffect } from 'react';
import Link from 'next/link';
import HeroSection from '/components/made-components/hero-section';
import { ProjectCarousel } from 'components/made-components/projectCarousel'

export default function Page({ children }) {

    return (
        <div className='MAIN'>
            <h1 className="max-w-4xl mx-auto">
                Hello, Jaren!
            </h1>
            <section>
                <div className="div">
                    {/* <HeroSection /> */}
                    <div className="HEROSECTION min-h-96 flex justify-center bg-gradient-to-b from-base-100 via-slate-600 to-base-100">
                        
                    </div>
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