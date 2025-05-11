import type { Metadata } from 'next'
import { Atkinson_Hyperlegible } from 'next/font/google'
import './globals.css'
import { Toaster } from '@/components/ui/sonner'
import RouterProgressBar from '@/components/router-progress-bar'

const atkinson = Atkinson_Hyperlegible({
    weight: ['400'],
    subsets: ['latin', 'latin-ext'],
})

export const metadata: Metadata = {
    title: 'Dhanush C.',
    description: 'Made with love <3.',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body
                className={`${atkinson.className} bg-stone-950 tracking-wide antialiased selection:bg-orange-600/30`}
            >
                <RouterProgressBar />
                <Toaster
                    closeButton
                    className="boder-orange-600 bg-orange-300/5 text-stone-100 backdrop-blur-md"
                />
                {children}
            </body>
        </html>
    )
}
