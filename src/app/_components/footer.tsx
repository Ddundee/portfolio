// import MotionContext from "@/context/motion-context"
// import { cn } from "@/lib/utils"
// import React, { use } from "react"

import { cn } from "@/lib/utils";

export default function Footer({ className }: { className: string }) {
    //const { setMotion } = use(MotionContext)

    return (
        <footer className={cn("mt-9 flex w-full max-w-screen-md flex-row gap-4", className)}>
            <a
                className="rounded-sm px-2 py-1 text-stone-400 no-underline duration-100 hover:bg-orange-300/5 hover:text-orange-600"
                target="_blank"
                href="mailto:dhanushc@vt.edu"
                rel="noreferrer"
            >
                email
            </a>
            <a
                className="rounded-sm px-2 py-1 text-stone-400 no-underline duration-100 hover:bg-orange-300/5 hover:text-orange-600"
                target="_blank"
                href="https://www.github.com/ddundee"
                rel="noreferrer"
            >
                github
            </a>
            <a
                className="rounded-sm px-2 py-1 text-stone-400 no-underline duration-100 hover:bg-orange-300/5 hover:text-orange-600"
                target="_blank"
                href="https://www.linkedin.com/in/dhanush-chilakala/"
                rel="noreferrer"
            >
                linkedin
            </a>
            <a
                className="rounded-sm px-2 py-1 text-stone-400 no-underline duration-100 hover:bg-orange-300/5 hover:text-orange-600"
                target="_blank"
                href="/assets/dhanush_chilakala_resume.pdf"
                rel="noreferrer"
            >
                resume
            </a>
        </footer>
    )
}
