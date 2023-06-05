'use client'

import '@/assets/styles/globals.css'

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <h1 className="font-light">Auth layout</h1>
            {children}
        </>
    )
}
