import '@/assets/styles/globals.css'

export default function HomeLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <h1>hello</h1>
            {children}
        </>
    )
}
