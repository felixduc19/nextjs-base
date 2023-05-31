import React, { PropsWithChildren, memo } from 'react'
import { useSession } from 'next-auth/react'
import { redirect, usePathname } from 'next/navigation'

interface IPrivateLayoutProps {}

const PrivateLayout = (props: PropsWithChildren<IPrivateLayoutProps>) => {
    const pathname = usePathname()
    const session = useSession({
        required: true,
        onUnauthenticated() {
            redirect(`/login?callbackUrl=${pathname}`)
        },
    })
    return <>{props.children}</>
}

export default memo(PrivateLayout)
