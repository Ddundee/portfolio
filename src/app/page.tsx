'use client'
import React from "react"
import { ScrambleText } from "@/components/scramble-text"
import PageLayout from "./_components/page-layout"
import { Caveat } from "next/font/google"
import CMDAToolTip from "@/components/cmda-tooltip"


const caveat = Caveat({
    subsets: ["cyrillic", "cyrillic-ext", "latin", "latin-ext"],
})

export default function Home() {
    const ageYear =
        new Date(
            Date.now() - new Date("April 8, 2006 00:00:00 EST").getTime()
        ).getUTCFullYear() - 1970

    return (
        <PageLayout>
            <div className="" />
            <div>
                <h1 className="min-h-7 mb-1 w-full text-4xl font-bold text-neutral-100">
                    {" "}
                    <ScrambleText minors="dhanush chilakala" />
                </h1>
                <p className="text-neutral-400">based in dallas, tx</p>
            </div>
            <p className="text-neutral-300">
                i&apos;m a {ageYear} y/o undergrad student at virginia tech majoring in cs + {<CMDAToolTip />}. i love building things and solving problems. if i'm not coding, i'm probably watching movies.
            </p>


        </PageLayout>
    )
}