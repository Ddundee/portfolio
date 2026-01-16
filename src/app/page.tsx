import React from "react"
import { ScrambleText } from "@/components/scramble-text"
import PageLayout from "@/app/_components/page-layout"
import { Caveat } from "next/font/google"
import CMDAToolTip from "@/components/cmda-tooltip"
import Link from "next/link"
import BLOGS from "./blog/blogs"
import BlogList from "./_components/blog-list"

export default function Home() {
    const ageYear =
        new Date(
            Date.now() - new Date("April 8, 2006 00:00:00 EST").getTime()
        ).getUTCFullYear() - 1970

    return (

        <div className="space-y-12">
            <div className="space-y-9">
                <div className="space-y-2">
                    <h1 className="min-h-12 w-full text-5xl font-bold text-neutral-100">
                        <ScrambleText minors="dhanush chilakala" />
                    </h1>
                    <p className="text-neutral-400 text-lg">based in dallas, tx</p>
                </div>
                <p className="text-neutral-300 text-lg">
                    i&apos;m a {ageYear} y/o undergrad student at virginia tech majoring in cs + cmda (just a complicated name for data analytics). i love building things and solving problems. if i'm not coding, i'm probably watching movies.
                </p>
            </div>
            <div className="space-y-3">
                <h2 className="min-h-7 w-full text-2xl font-semibold text-neutral-100">
                    blog
                </h2>
                <BlogList />
            </div>
        </div>
    )
}