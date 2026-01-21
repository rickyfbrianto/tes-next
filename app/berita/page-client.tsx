import Link from 'next/link'
import React from 'react'

type DataProps = {
    completed: boolean,
    id: number,
    title: string,
    userId: number
}

export default function PageClient({ data }: { data: DataProps[] }) {
    return (
        <div className='flex flex-col gap-2'>
            <span>List Berita</span>
            {data.map(val => (
                <Link key={val.id} href={`/berita/${val.id.toString()}`}>
                    <span >{val.title}</span>
                </Link>
            ))}
        </div>
    )
}
