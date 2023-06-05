'use client'
import { signOut } from 'next-auth/react'

import UserList from './components/UserList'
import { CloseIcon } from '@/assets/icons'

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <span className="text-black">Font family</span>
            <div className="font-light">Jost 300</div>
            <div className="font-normal">Jost 400</div>
            <div className="font-medium">Jost 500</div>
            <div className="font-semibold">Jost 600</div>
            <div className="font-oswald font-normal">Oswald 400</div>
            <div className="font-oswald font-medium">Oswald 500</div>
            <CloseIcon className="text-red-600 w-[20px] h-[20px]"/>
            {/* <UserList /> */}
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
