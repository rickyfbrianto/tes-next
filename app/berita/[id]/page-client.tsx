type Lengkap = {
    id: number
    title: string
}

export default function PageClient<T extends Lengkap>({ data }: { data: T }) {
    return (
        <div className="flex flex-col border rounded-lg p-3">
            <span>ID {data.id}</span>
            <span>{data.title}</span>
        </div>
    )
}
