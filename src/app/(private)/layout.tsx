'use client'
import '@/assets/styles/globals.css'

import PrivateLayout from '@/components/layouts/PrivateLayout'

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <h1>Auth layout</h1>
            <PrivateLayout>{children}</PrivateLayout>
        </>
    )
}
