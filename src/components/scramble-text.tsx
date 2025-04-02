"use client"
import { useScramble } from "use-scramble"

export function ScrambleText({
    minors,
    className
}: {
    minors: string
    className?: string
}) {

    const { ref, replay } = useScramble({
        text: minors,
        range: [65, 125],
        speed: .5,
        tick: 1,
        step: 10,
        scramble: 8,
        seed: 2,
        chance: 1,
        overdrive: true,
        overflow: true,
        playOnMount: true,

    })

    return <span ref={ref} onMouseOver={replay} className={className} />
}