"use client";

import { useEffect, useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { motion } from "framer-motion";
import Link from "next/link";
import { Bevan } from "next/font/google";
import Image from "next/image";
import PageTemplate from './../../components/pageTemplate'

import SmoothScroll from "./../../components/smoothScroll";
import ProjectCard from "../../components/projectCard";
import NavBar from "../../components/navbar";
import Footer from "../../components/footer";

export default function Home() {
    return (
        <PageTemplate>
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
                        <h1 className="text-2xl md:text-3xl font-semibold">My work</h1>
                        <div className="w-full h-8 md:h-12" />
                        <div className="flex flex-col gap-6 md:gap-8">
                            <p className="text-xl md:text-2xl font-light">

                                On a mission to continually learn and grow my skills in computer science, robotics, and AI/ML by building challenging and innovative projects.

                            </p>
                            <hr className="border-black" />
                            <h2 className="text-xl md:text-2xl font-medium">Projects</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <ProjectCard
                                    bg={"wordle-solver"}
                                    href={"https://github.com/Ddundee/wordle-solver"}
                                    name={"wordle solver"}
                                />
                                {/* <ProjectCard
                  bg={"wdlm"}
                  href={"https://github.com/Ddundee/wdlm"}
                  name={"wdlm"}
                /> */}
                            </div>
                            <hr className="border-black" />
                            <h2 className="text-xl md:text-2xl font-medium">Education</h2>
                            <div>
                                <div className="flex justify-between mb-3">
                                    <p className="text-xl md:text-2xl font-light">
                                        Virginia Polytechnic Institute of Technology
                                    </p>
                                    <p className="text-lg md:text-xl font-light">
                                        Fall 2024 - Spring 2028
                                    </p>
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between mb-3">
                                    <p className="text-xl md:text-2xl font-light">
                                        Flower Mound High School
                                    </p>
                                    <p className="text-lg md:text-xl font-light">
                                        Fall 2020 - Spring 2024
                                    </p>
                                </div>
                                <ul className="[&>li]:mb-2">
                                    <li>
                                        <i>Related Coursework</i>: AP Computer Science A, AP Computer
                                        Science Principles, AP Calculus AB/BC, AP Statistics
                                    </li>
                                    <li>
                                        <i>Clubs and Organizations</i>: Tech Club (FIRST FRC, FIRST
                                        FTC, AWS DeepRacer & TSA), Computer Science Club, STEM Club,
                                        Student Council
                                    </li>
                                </ul>
                            </div>

                            <div className="w-full h-8 md:h-11" />
                            <Footer />
                        </div>
                    </div>
                </div>
            </div>
        </PageTemplate>
    )
}


