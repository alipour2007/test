'use client'
import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

export default function NavEvent() {

    const pathname = usePathname();
    const searchParams = useSearchParams();
    
    useEffect(() => {
        console.log('changed')
    }, [pathname, searchParams])

    return <></>
}