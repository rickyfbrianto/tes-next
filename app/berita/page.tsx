import PageClient from './page-client'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: "Berita"
}

export default async function page() {
    try {
        const req = await fetch('https://jsonplaceholder.typicode.com/todos')
        const res = await req.json()
        return (
            <PageClient data={res} />
        )
    } catch (error) {
        console.log(error)
        return null
    }
}
