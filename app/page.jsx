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
        <div>
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
            </section>
        </div>
    )
}