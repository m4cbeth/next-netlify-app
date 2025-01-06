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
                    <button className="btn btn-large btn-success">BUTTON</button>
                    <button className="btn btn-large btn-success">BUTTON</button>
                    <button className="btn btn-large btn-success">BUTTON</button>
                    <button className="btn btn-large btn-success">BUTTON</button>
                </div>
            </section>
        </div>
    )
}