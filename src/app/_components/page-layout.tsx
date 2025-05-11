'use client'

import React, { useState, type ReactNode } from 'react'
import Footer from './footer'
import MotionContext from '@/context/motion-context'

type Props = {
    children: ReactNode[] | ReactNode
}

export default function PageLayout({ children }: Props) {
    const [motion, setMotion] = useState<boolean>(true)

    return (
        <MotionContext value={{ motion, setMotion }}>
            <div className="relative flex min-h-screen flex-col items-center justify-between pb-14">
                <div className="noise-overlay" aria-hidden="true">
                    <div className="noise" />
                </div>

                <div className="relative z-10 flex w-screen flex-col items-center gap-9 px-4 py-14">
                    <div className="h-12 w-full" />
                    <main className="w-full max-w-screen-md space-y-9">
                        {children}
                    </main>
                </div>
                <Footer className="relative z-10" />
            </div>
        </MotionContext>
    )
}
