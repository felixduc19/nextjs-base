'use client'
import { signIn, signOut } from 'next-auth/react'

const LoginPage = async ({
    searchParams,
}: {
    searchParams: { [key: string]: string | undefined }
}) => {
    return (
        <div>
            <button
                onClick={() => {
                    signIn('google', {
                        callbackUrl:
                            searchParams && searchParams['callbackUrl'],
                    })
                }}
            >
                Google
            </button>
            <button
                onClick={() => {
                    signIn('facebook')
                }}
            >
                Facebook
            </button>
            <button
                onClick={() => {
                    signIn()
                }}
            >
                Credentials
            </button>
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

export default LoginPage
