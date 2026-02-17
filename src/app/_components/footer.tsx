"use client"
import { cn } from "@/lib/utils";
import RESUME_LINK from "@/util/resumeLink";
import { useEffect, useState } from "react";

export default function Footer({ className }: { className: string }) {
const [views, setViews] = useState<number>(0);
    useEffect(() => {
        const fetchViews = async () => {
            const response = await fetch(process.env.VIEW_URL || "");
            const data = await response.json();
            setViews(data.value);
        }
        fetchViews();
    }, []);

    return (
        <footer className={cn("mt-9 flex w-full max-w-screen-md flex-row gap-4 justify-between", className)}>
            <div>
            <a
                className="select-none rounded-sm px-2 py-1 text-neutral-400 no-underline duration-100 hover:bg-orange-300/5 hover:text-orange-600"
                target="_blank"
                href="mailto:dhanushc@vt.edu"
                rel="noreferrer"
            >
                email
            </a>
            <a
                className="select-none rounded-sm px-2 py-1 text-neutral-400 no-underline duration-100 hover:bg-orange-300/5 hover:text-orange-600"
                target="_blank"
                href="https://www.github.com/ddundee"
                rel="noreferrer"
            >
                github
            </a>
            <a
                className="select-none rounded-sm px-2 py-1 text-neutral-400 no-underline duration-100 hover:bg-orange-300/5 hover:text-orange-600"
                target="_blank"
                href="https://www.linkedin.com/in/dhanush-chilakala/"
                rel="noreferrer"
            >
                linkedin
            </a>
            <a
                className="select-none rounded-sm px-2 py-1 text-neutral-400 no-underline duration-100 hover:bg-orange-300/5 hover:text-orange-600"
                target="_blank"
                href={RESUME_LINK}
                rel="noreferrer"
            >
                resume
            </a>
            </div>
            <div>
                <p className="text-neutral-400 text-sm">{views} views</p>
            </div>
        </footer>
    )
}
