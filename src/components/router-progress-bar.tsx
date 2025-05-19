"use client"

import React, { useEffect } from "react"
import { usePathname } from "next/navigation"
import nProgress from "nprogress"

export default function RouterProgressBar() {
    const pathname = usePathname()

    nProgress.configure({ showSpinner: false })

    useEffect(() => {
        nProgress.done()
        return () => {
            nProgress.start()
        }
    }, [pathname])

    return <></>
}
