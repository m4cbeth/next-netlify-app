import '/styles/globals.css'

export default function Rootlayout({ children }) {
    return (
        <html lang="en" data-theme="">
            <head>
                <link rel="icon" href="/favicon.svg" sizes="any" />
            </head>
            <body className="h-screen">
                {children}
            </body>
        </html>
    )
}