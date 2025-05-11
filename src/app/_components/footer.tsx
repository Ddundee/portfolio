import MotionContext from '@/context/motion-context'
import { cn } from '@/lib/utils'
import React, { use } from 'react'
import * as Switch from '@radix-ui/react-switch'

export default function Footer({ className }: { className: string }) {
    const { setMotion } = use(MotionContext)

    return (
        <footer
            className={cn('mt-9 flex w-full max-w-screen-md gap-4', className)}
        >
            <a
                className="rounded-sm px-2 py-1 text-stone-400 no-underline hover:bg-orange-300/5 hover:text-orange-600"
                target="_blank"
                href="mailto:dhanushc@vt.edu"
                rel="noreferrer"
            >
                email
            </a>
            <a
                className="rounded-sm px-2 py-1 text-stone-400 no-underline hover:bg-orange-300/5 hover:text-orange-600"
                target="_blank"
                href="https://www.github.com/ddundee"
                rel="noreferrer"
            >
                github
            </a>
            <a
                className="rounded-sm px-2 py-1 text-stone-400 no-underline hover:bg-orange-300/5 hover:text-orange-600"
                target="_blank"
                href="https://www.linkedin.com/in/dhanush-chilakala/"
                rel="noreferrer"
            >
                linkedin
            </a>
            <Switch.Root className="">
                <Switch.Thumb className="" />
            </Switch.Root>
            {/* <Link className="no-underline text-stone-400 hover:text-orange-600 py-1 px-2 rounded-sm hover:bg-orange-300/5" href="/contact">or just fill out this form</Link> */}
        </footer>
    )
}
