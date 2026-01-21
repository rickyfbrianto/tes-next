import Link from 'next/link'
import React from 'react'

export default function Header() {
    return (
        <div className='flex items-center h-[6rem] bg-stone-300 gap-5 p-5'>
            <Link href={'/'}>Beranda</Link>
            <Link href={'/product'}>Product</Link>
            <Link href={'/berita'}>Berita</Link>
            <Link href={'/about'}>About</Link>
        </div >
    )
}
