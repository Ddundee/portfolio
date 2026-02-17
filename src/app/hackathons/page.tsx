import React from "react"
import { ScrambleText } from "@/components/scramble-text"
import PageLayout from "@/app/_components/page-layout"
import { Caveat } from "next/font/google"
import CMDAToolTip from "@/components/cmda-tooltip"
import Link from "next/link"
import HackathonList from "../_components/hackathon-list"

export default function Home() {

    return (
        <div className="space-y-12">
            <div className="space-y-9">
                <div className="space-y-2">
                    <h1 className="min-h-7 w-full text-5xl font-bold text-neutral-100">
                        hackathons
                    </h1>
                    <p className="text-neutral-400 text-lg">competitions i've participated in</p>
                </div>
                <HackathonList />
            </div>
        </div>
    )
}