import '../styles/globals.css';
import { Footer } from '../components/footer';
import { Header } from '../components/header';

export const metadata = {
    title: {
        template: '%s | Netlify',
        default: 'Netlify Starter'
    }
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" data-theme="lofi">
            <head>
                <link rel="icon" href="/favicon.svg" sizes="any" />
            </head>
            <body className="antialiased text-white">
                <div className="flex flex-row min-h-screen px-6 bg-grid-pattern sm:px-12">
                    <div className="flex flex-row justify-evenly w-full grow">
                        <Header />
                        <div className="border max-w-5xl grow">
                            {children}
                        </div>
                    </div>
                    <Footer />
                </div>
            </body>
        </html>
    );
}
