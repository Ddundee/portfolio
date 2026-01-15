import type { Metadata } from "next"
import { Atkinson_Hyperlegible } from "next/font/google"
import "./globals.css"
import { Toaster } from "@/components/ui/sonner"
import RouterProgressBar from "@/components/router-progress-bar"
import { TooltipProvider } from "@/components/ui/tooltip"
import PageLayout from "./_components/page-layout"

const atkinson = Atkinson_Hyperlegible({
    weight: ["400"],
    subsets: ["latin", "latin-ext"],
})

export const metadata: Metadata = {
    title: "Dhanush C.",
    description: "Made with love <3.",
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body
                className={`${atkinson.className} bg-neutral-950 tracking-wide antialiased selection:bg-orange-600/30`}
            >
                <TooltipProvider>
                    <Toaster
                        closeButton
                        className="boder-orange-600 bg-orange-300/5 text-neutral-100 backdrop-blur-md"
                    />
                    <PageLayout>
                        {children}
                    </PageLayout>
                </TooltipProvider>
            </body>
        </html>
    )
}
