"use client";

import { useEffect, useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { motion } from "framer-motion";
import Link from "next/link";
import { Bevan } from "next/font/google";
import Image from "next/image";

import SmoothScroll from "./../components/smoothScroll";
import ProjectCard from "../components/projectCard";
import NavBar from "../components/navbar";
import Footer from "../components/footer";
import PageTemplate from "../components/pageTemplate";


export default function BlogLink({title, href}) {
    const [count, setCount] = useState(0);

  

    if(!title) {
        title = 'Untitled';
        href = '/404';
    }
    else if(!href) {
        href = "/blog/" + title.toLowerCase().split(' ').join('-');
    }

    return (
        <div className="hover:opacity-65 duration-500">
            <Link href={href}>
                <h1 className="text-xl md:text-2xl font-light">{title}</h1>
                <p>{count} views</p>
            </Link>
        </div>
    );
}
