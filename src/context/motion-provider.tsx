"use client"

import { useState, type ReactNode } from "react"
import MotionContext from "./motion-context"

type Props = {
    children: ReactNode
}

export default function MotionProvider({ children }: Props) {
    const [motion, setMotion] = useState(true)

    return (
        <MotionContext.Provider value={{ motion, setMotion }}>
            {children}
        </MotionContext.Provider>
    )
}

