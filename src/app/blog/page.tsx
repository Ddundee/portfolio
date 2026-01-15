import React from "react"
import { ScrambleText } from "@/components/scramble-text"
import PageLayout from "@/app/_components/page-layout"
import { Caveat } from "next/font/google"
import CMDAToolTip from "@/components/cmda-tooltip"
import Link from "next/link"
import BLOGS from "./blogs"
import BlogList from "../_components/blog-list"

export default function Home() {
    const ageYear =
        new Date(
            Date.now() - new Date("April 8, 2006 00:00:00 EST").getTime()
        ).getUTCFullYear() - 1970

    return (
        <div className="space-y-12">
            <div className="space-y-9">
                <div className="space-y-2">
                    <h1 className="min-h-7 w-full text-5xl font-bold text-neutral-100">
                        blog
                    </h1>
                    <p className="text-neutral-400 text-lg">writing my thoughts and maybe useful tidbits</p>
                </div>
                <BlogList />
            </div>
        </div>
    )
}