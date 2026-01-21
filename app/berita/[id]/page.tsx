import Link from 'next/link'
import PageClient from './page-client'

export default async function page({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params
    const req = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
    const res = await req.json()

    return (
        <div className='flex flex-col gap-2'>
            <Link href='/berita'>Back to Berita</Link>
            <PageClient data={res} />
        </div>
    )
}
