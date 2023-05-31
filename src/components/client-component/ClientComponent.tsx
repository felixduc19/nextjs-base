'use client'
import React, { PropsWithChildren, useEffect, useState } from 'react'

interface IClientComponentProps {}

const ClientComponent = (props: PropsWithChildren<IClientComponentProps>) => {
    const [hasMounted, setHasMounted] = useState(false)
    useEffect(() => {
        setHasMounted(true)
    }, [])

    if (!hasMounted) return null

    return <>{props.children}</>
}

export default ClientComponent
