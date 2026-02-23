import type { Metadata } from "next"
import { Atkinson_Hyperlegible } from "next/font/google"
import "./globals.css"
import { Toaster } from "@/components/ui/sonner"
import RouterProgressBar from "@/components/router-progress-bar"
import { TooltipProvider } from "@/components/ui/tooltip"
import PageLayout from "./_components/page-layout"
import { Analytics } from "@vercel/analytics/next"

const atkinson = Atkinson_Hyperlegible({
    weight: ["400"],
    subsets: ["latin", "latin-ext"],
})

export const metadata: Metadata = {
    metadataBase: new URL("https://www.dhanushc.com"),
    title: {
        default: "Dhanush Chilakala – CS & CMDA @ Virginia Tech",
        template: "%s | Dhanush Chilakala",
    },
    description:
        "Portfolio of Dhanush Chilakala, a Dallas-based CS & CMDA undergrad at Virginia Tech who loves building things, solving problems, and writing about hackathons and software.",
    keywords: [
        "Dhanush Chilakala",
        "Dhanush C",
        "Dhanush portfolio",
        "software engineer",
        "Virginia Tech",
        "CS CMDA",
        "developer portfolio",
        "Dallas",
    ],
    alternates: {
        canonical: "/",
    },
    openGraph: {
        type: "website",
        url: "https://www.dhanushc.com",
        title: "Dhanush Chilakala – CS & CMDA @ Virginia Tech",
        description:
            "Dallas-based CS & CMDA undergrad at Virginia Tech who loves building things, solving problems, and sharing projects and hackathon experiences.",
        siteName: "Dhanush Chilakala",
    },
    twitter: {
        card: "summary_large_image",
        title: "Dhanush Chilakala – CS & CMDA @ Virginia Tech",
        description:
            "Portfolio of Dhanush Chilakala, Dallas-based undergrad and developer at VT Hacks.",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-snippet": -1,
            "max-image-preview": "large",
            "max-video-preview": -1,
        },
    },
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
                <Analytics />
            </body>
        </html>
    )
}
