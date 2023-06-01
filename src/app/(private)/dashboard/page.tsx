'use client'
import { signOut } from 'next-auth/react'

import UserList from './components/UserList'

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <UserList />
            <button
                onClick={() => {
                    signOut()
                }}
            >
                SignOUt
            </button>
        </main>
    )
}
