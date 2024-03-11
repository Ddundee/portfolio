
"use client";
import React, { useEffect, useState } from "react";
import Button from "@/app/components/button";
import Skeleton from "./skeleton";
import { Toaster } from "react-hot-toast";


export default function ProjectCard({ bg, href, name }) {
    if(!bg) bg = "bg-[#fbe8e8]"
    if(!name) name = "Untitled"
    return (
        <a className={(href ? "hover:underline" : "") + " duration-75 select-none"} href={href} target="_blank">
            <div className={`rounded-[6px] text-[#170202] font-geist_sans h-64 w-[448px] border border-[#170202] ${bg} bg-blend-overlay`}></div>
            <h4 className="text-base uppercase">{name}</h4>
        </a>


    );
}