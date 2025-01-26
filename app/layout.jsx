import '/styles/globals.css'
import ClientRootLayout from './clientApp';

import { auth } from 'auth'

import { getUsers } from '@/components/actions/getusers';


import { SessionProvider } from 'next-auth/react'

export default async function AuthAppWrap({ children }) {
    
    const session = await auth()

    return (
        <SessionProvider>
            <ClientRootLayout session={session}>
                {/* <pre>{JSON.stringify(session)}</pre> */}
                {children}
            </ClientRootLayout>
        </SessionProvider>
    )
}

