"use client";

import { useEffect, useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import QuoteCard from "../components/quoteCard";
import { motion } from "framer-motion";
import Link from "next/link";
import { Bevan } from "next/font/google";
import Image from "next/image";
import pic1 from "./../../public/1.webp";
import pic2 from "./../../public/2.webp";
import pic3 from "./../../public/3.webp";

import SmoothScroll from "./../components/smoothScroll";
import ProjectCard from "../components/projectCard";
import NavBar from "../components/navbar";
import Footer from "../components/footer";

const bevan = Bevan({ subsets: ["latin-ext"], weight: ["400"] });

export default function Home() {
    const [pageLoaded, setPageLoaded] = useState(false);
    const [loadingPercentage, setLoadingPercentage] = useState(0);

    useEffect(() => {
        const updateLoadingPercentage = () => {
            const { loadEventEnd, navigationStart } = performance.timing;
            const pageLoadTime = loadEventEnd - navigationStart;
            const percentage = Math.min(
                Math.floor((performance.now() / pageLoadTime) * 100),
                100
            );
            setLoadingPercentage(percentage);

            if (percentage === 100) {
                setTimeout(() => {
                    handleToastDismiss();
                    setPageLoaded(true);
                }, 1);
            } else {
                requestAnimationFrame(updateLoadingPercentage);
            }
        };

        requestAnimationFrame(updateLoadingPercentage);
    }, []);


    if (!pageLoaded) return <Loading percentage={loadingPercentage} />;
    else
        return (
            <SmoothScroll>
                <div className="w-full h-full flex justify-center align-middle font-geist_sans">
                    <Toaster
                        position="bottom-left"
                        reverseOrder={false}
                        toastOptions={{
                            style: {
                                background: "none",
                                boxShadow: "none",
                                padding: "0",
                                margin: "0",
                                border: "none",
                            },
                        }}
                    />
                    <div className="w-full md:w-3/6 px-4 text-[#170202]">
                        <div className="">
                            <NavBar />
                            <h1 className="text-2xl md:text-3xl font-semibold">
                                My work
                            </h1>
                            <div className="w-full h-8 md:h-12" />
                            <div className="flex flex-col gap-6 md:gap-8">
                                <p className="text-xl md:text-2xl font-light">
                                    <span className="bg-yellow-300">TODO</span>
                                    <s>On a mission to build products developers love, and along the way, teach the next generation of developers. Here's a summary of my work so far.</s>
                                </p>
                                <hr className="border-black" />
                                <h2 className="text-xl md:text-2xl font-medium">Projects</h2>
                                <div className="flex flex-wrap gap-3 justify-stretch">
                                    <ProjectCard bg={"wordle-solver"} href={"https://github.com/Ddundee/wordle-solver"} name={"wordle solver"} />
                                    
                                </div>
                                <hr className="border-black" />
                                <h2 className="text-xl md:text-2xl font-medium">Education</h2>
                                <div>
                                    <div className="flex justify-between mb-3">
                                        <p className="text-xl md:text-2xl font-light">Virginia Polytechnic Institute of Technology</p>
                                        <p className="text-lg md:text-xl font-light">Fall 2024 - 2028</p>
                                    </div>

                                </div>
                                <div>
                                    <div className="flex justify-between mb-3">
                                        <p className="text-xl md:text-2xl font-light">Flower Mound High School</p>
                                        <p className="text-lg md:text-xl font-light">Fall 2020 - Spring 2024</p>
                                    </div>
                                    <ul className="[&>li]:mb-2">
                                        <li><i>Related Coursework</i>: AP Computer Science A, AP Computer Science Principles, AP Calculus AB/BC, AP Statistics</li>
                                        <li><i>Clubs and Organizations</i>: Tech Club (FIRST FRC, FIRST FTC, AWS DeepRacer & TSA), Computer Science Club, STEM
                                            Club, Student Council</li>
                                    </ul>
                                </div>

                                <div className="w-full h-8 md:h-11" />
                                <Footer />
                            </div>
                        </div>
                    </div>
                </div>
            </SmoothScroll>
        );
}

let handleToastDismiss;

function Loading({ percentage }) {
    const toastRef = useRef(null);

    const handleDismiss = () => {
        if (toastRef.current !== null) {
            toast.dismiss(toastRef.current);
            toastRef.current = null;
        }
    };

    useEffect(() => {
        if (toastRef.current === null) {
            toastRef.current = toast((t) => <QuoteCard />, {
                duration: Infinity,
            });
        }

        handleToastDismiss = handleDismiss;
        return handleDismiss;
    }, []);

    return (
        <div className="font-geist_sans">
            <Toaster
                position="bottom-left"
                reverseOrder={false}
                toastOptions={{
                    style: {
                        background: "none",
                        boxShadow: "none",
                        padding: "0",
                        margin: "0",
                        border: "none",
                    },
                }}
            />
            <div className="w-screen h-screen flex justify-center items-center">
                <div>
                    <ProgressBar percentage={percentage} />
                    <div className="w-full h-[14px]" />
                    <div className="flex justify-center text-[#170202] font-normal text-xl">
                        <p>{percentage}%</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

function ProgressBar({ percentage }) {
    const [screenWidth, setScreenWidth] = useState(0);

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };

        setScreenWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div className="w-full md:w-[579px]">
            <motion.div
                initial={{ x: 0 }}
                animate={{ x: (percentage / 100) * (screenWidth < 768 ? screenWidth - 48 : 531) }}
                transition={{ ease: "linear", duration: 0.5 }}
                className="w-12 h-12 rounded-full border-[#170202] border-[3px]"
            />
            <div className="h-[3px] bg-[#170202] w-full md:w-[579px] rounded-full" />
        </div>
    );
}
