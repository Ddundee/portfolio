import Footer from "./footer"
import Link from "next/link"
import { ReactNode } from "react"
import Navbar from "./navbar"

type Props = {
    children: ReactNode[] | ReactNode
}

export default function PageLayout({ children }: Props) {

    return (
        <div className="relative flex min-h-screen flex-col items-center justify-between pb-14">
            <div className="relative z-10 flex w-screen flex-col items-center gap-1 px-4 py-14">
                <Navbar />
                <div className="h-12 w-full" />
                <main className="w-full max-w-screen-md">
                    {children}
                </main>
            </div>
            <Footer className="relative z-10" />
        </div>
    )
}
