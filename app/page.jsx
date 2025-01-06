'use client';
import { useEffect } from 'react';

export default function Page({ children }) {

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
                <div>
                    <button className="mx-4 btn-outline border-2 rounded-lg mt-10 btn btn-large btn-primary">BUTTON</button>
                    <button className="mx-4 btn-outline border-2 rounded-lg mt-10 btn btn-large btn-secondary">BUTTON</button>
                    <button className="mx-4 btn-outline border-2 rounded-lg mt-10 btn btn-large btn-accent">BUTTON</button>
                    <button className="mx-4 btn-outline border-2 rounded-lg mt-10 btn btn-large btn-neutral">BUTTON</button>
                </div>
            </section>
        </div>
    )
}