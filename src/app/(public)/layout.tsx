import { getServerSession } from 'next-auth/next'
import { redirect } from 'next/navigation'

import '@/assets/styles/globals.css'
import Link from 'next/link'

export default async function HomeLayout({
    children,
}: {
    children: React.ReactNode
}) {
    // const session = await getServerSession()

    // if (session) {
    //     return redirect('/')
    // }
    return (
        <>
            <h1>Public layout</h1>
            {children}
        </>
    )
}
