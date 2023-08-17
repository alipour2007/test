'use client'
import Link from 'next/link'
import React from 'react'

export default function CustomLink(props:any) {
    return (
        <Link href={props.href} prefetch={false} onClick={() => { console.log('a') }}>{props.children}</Link>
    )
}
