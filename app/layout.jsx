import '../styles/globals.css'

export default function RootLayout({ children }) {
    return (
        <html lang="en" data-theme="">
            <head>
                <link rel="icon" href="/favicon.svg" sizes="any" />
            </head>
            <body className="h-screen">
                <main class='flex flex-col h-full w-full'>
                    <div className="flex flex-row flex-1">
                        <div className=" flex-none w-16 bg-slate-950">
                            <ul>
                                <li>1</li>
                                <li>2</li>
                                <li>3</li>
                                <li>3</li>
                            </ul>
                        </div>
                        <div className="mainDisplay flex flex-col w-full">
                            <div className="flex-1">
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

