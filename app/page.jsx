'use client';
import { useEffect } from 'react';
import Link from 'next/link';

export default function Page({ children }) {

    return (
        <div className='MAIN mx-5'>
            <h1>
                Hello, world!
            </h1>
            <section>
                <div className="div">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac
                        ultricies est. Sed nec eros nec tortor tincidunt tincidunt. Nulla
                        facilisi. Sed id enim nec odio fermentum ultricies. Nulla facilisi.
                        Sed id enim nec odio fermentum ultricies.
                    </p>
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
            </section>
        </div>
    )
}