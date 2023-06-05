'use client'
import React from 'react'
import { signOut } from 'next-auth/react'
import Link from 'next/link'

const HomePage = async () => {
    return (
        <div>
            <p>Home page</p>
            <Link href="/login">Navigate to Login screen</Link>
            <Link href="/dashboard">Navigate to Dashboard screen</Link>

            <button
                onClick={() => {
                    signOut()
                }}
            >
                SignOUt
            </button>
        </div>
    )
}

export default HomePage
