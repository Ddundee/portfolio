"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import React, { useEffect } from "react"

const pages = [
    {
        title: "[h]ome",
        url: "/"
    },
    {
        title: "[b]log",
        url: "/blog"
    }
]

export default function Navbar() {
    const pathname = usePathname() || "/"
    const router = useRouter()


    useEffect(() => {
        const handleKeyPress = (event: KeyboardEvent) => {
            // Don't trigger if any input elements are focused or if event target is an input
            if (
                document.activeElement?.tagName === "INPUT" ||
                document.activeElement?.tagName === "TEXTAREA" ||
                event.target instanceof HTMLInputElement
            ) {
                return
            }

            for (const page of pages) {
                if (event.key.toLowerCase() === page.title.charAt(1)) {
                    router.push(page.url)
                }
            }
        }

        window.addEventListener("keydown", handleKeyPress)
        return () => window.removeEventListener("keydown", handleKeyPress)
    }, [router])

    return (
        <nav className="w-full max-w-screen-md gap-3 flex">
            {pages.map(page => {
                if (pathname == page.url) return <p key={page.url} className="text-neutral-200">{page.title}</p>
                else return <Link key={page.url} href={page.url} className="text-neutral-400 hover:text-neutral-200 duration-200">{page.title}</Link>
            })}
        </nav>
    )
}
