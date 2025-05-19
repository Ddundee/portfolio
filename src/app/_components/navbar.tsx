"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import React, { useEffect } from "react"

const items = [
    {
        path: "/",
        name: "[h]ome",
    },
    // {
    //     path: "/contact",
    //     name: "[c]ontact"
    // },
]

export default function Navbar() {
    const pathname = usePathname() || "/"
    const router = useRouter()

    useEffect(() => {
        const handleKeydown = (e: KeyboardEvent) => {
            if (
                document.activeElement?.tagName === "INPUT" ||
                document.activeElement?.tagName === "TEXTAREA" ||
                e.target instanceof HTMLInputElement
            )
                return

            for (let i = 0; i < items.length; i++) {
                if (items[i].name[0] !== "[") continue

                if (items[i].name[1] === e.key) {
                    if (e.ctrlKey)
                        router.push(items[i].path) // TODO: replace to redirect in new tab
                    else router.push(items[i].path)
                }
            }
        }
        window.addEventListener("keydown", handleKeydown)
        return () => window.removeEventListener("keydown", handleKeydown)
    }, [router])

    return (
        <nav className="flex w-full max-w-screen-md gap-2 first:-ml-2">
            {items.map(({ name, path }) => {
                if (pathname === path)
                    return (
                        <div
                            className="rounded-sm px-2 py-1 text-stone-200"
                            key={path}
                        >
                            {name}
                        </div>
                    )
                return (
                    <Link
                        href={path}
                        className="rounded-sm px-2 py-1 text-stone-400 hover:bg-orange-300/5 hover:text-orange-600"
                        key={path}
                    >
                        {name}
                    </Link>
                )
            })}
        </nav>
    )
}
