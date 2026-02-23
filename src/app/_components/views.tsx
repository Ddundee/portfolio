"use client"

import { useEffect, useState } from "react";
import { motion } from 'motion/react'

const VIEW_URL = "https://abacus.jasoncameron.dev/hit/dhanushc_prod/key"

export default function Views() {
    const [views, setViews] = useState<number>(-1);
    useEffect(() => {
        const fetchViews = async () => {
            const response = await fetch(process.env.NEXT_PUBLIC_VIEW_URL || VIEW_URL);
            const data = await response.json();
            setViews(data.value);
        }
        fetchViews();
    }, []);
    return (
        <div>
            {views !== -1 && (
                <p className="text-neutral-400 text-sm">{views} views</p>
            )}
        </div>
    )
}
