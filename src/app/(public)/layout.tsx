import { getServerSession } from 'next-auth/next'
import { redirect } from 'next/navigation'

import '@/assets/styles/globals.css'

export default async function HomeLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const session = await getServerSession()

    if (session) {
        return redirect('/dashboard')
    }
    return (
        <>
            <h1>hello</h1>
            {children}
        </>
    )
}
