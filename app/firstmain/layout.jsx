import Sidenav from 'components/sidenav';
import { FaCog } from "react-icons/fa";
import '/styles/globals.css'

export default function RootLayout({ children }) {
    return (
        <html lang="en" data-theme="">
            <head>
                <link rel="icon" href="/favicon.svg" sizes="any" />
            </head>
            <body className="h-screen">
                <main className='flex flex-col h-full w-full'>
                    <div className="CONTAINER flex flex-row flex-1">
                        <div className="SIDEBAR flex flex-col justify-between w-16 bg-slate-900 px-5">
                            <Sidenav />
                            <div className='flex flex-row align-middle justify-center p-2 mb-3 relative'>
                                <FaCog className='absolute top-[-10px]' size={25}/>
                            </div>
                        </div>
                        <div className="MAINDISPLAY pt-20 flex flex-col w-full bg-[#09090a]">
                            <div className="flex-1 mx-10">
                                {children}
                            </div>
                            <div className="flex-none">
                                footer
                            </div>
                        </div>
                    </div>
                </main>
            </body>
        </html>
        
    );
}

