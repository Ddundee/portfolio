"use client";

import { useEffect, useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { motion } from "framer-motion";
import Link from "next/link";
import { Bevan } from "next/font/google";
import Image from "next/image";
import pic1 from "./../public/1.webp";
import pic2 from "./../public/2.webp";
import pic3 from "./../public/3.webp";
import { FaPython } from "react-icons/fa";

import SmoothScroll from "./../components/smoothScroll";
import NavBar from "./../components/navbar";
import Footer from "./../components/footer";
import PageTemplate from "./../components/pageTemplate";

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
            <h1 className="text-2xl md:text-3xl font-semibold">
              Hey, I am Dhanush C.
            </h1>
            <div className="w-full h-8 md:h-12" />
            <div className="flex flex-col gap-8 md:gap-10">
              <p className="text-xl md:text-2xl font-light">
                I'm an incoming freshmen at Virginia Tech majoring in Computer
                Science, with a strong passion in robotics, and machine
                learning. I hope to gain expertise in computer science and AIML
                through internships at STEM companies.
              </p>
              <p className="text-xl md:text-2xl font-light">
                I have extensive experience with competition robotics. I was
                part of FIRST robotics competitions for 4+ years as a Lead
                Programmer. I was the Lead Programmer on{" "}
                <a
                  target="_blank"
                  className="font-normal underline"
                  href="https://frc-events.firstinspires.org/team/4192"
                >
                  FRC (FIRST Robotics Competition) Team 4192
                </a>{" "}
                &{" "}
                <a
                  target="_blank"
                  className="font-normal underline"
                  href="https://ftc-events.firstinspires.org/team/21813"
                >
                  FTC (FIRST Tech Challenge) Team 21813
                </a>
                , where I implemented a motion profiling software for holonomic
                robots, and used concepts such as PIDF Controllers and Kalman
                Filters to accurately calculate and control systems, wining
                multiple awards for robot control and design.
              </p>

              <p className="text-xl md:text-2xl font-light">
                Recently, I've developed an interest in Machine Learning. I'm
                currently working on an AI that attempts solves a{" "}
                Wordle in the fewest
                attempts possible.
              </p>

              <div className="flex flex-col gap-6 md:gap-8 text-xl md:text-2xl font-light">
                <h2 className="text-xl md:text-2xl font-medium">Skills</h2>
                <ul className="[&>li]:mb-2">
                  <li>
                    <b>Programming Languages</b>: Python Javascript, Java
                  </li>
                  <li>
                    <b>Frameworks</b>: Node.js, Electron, React, Next.js, Astro, TailwindCSS, Bootstrap
                  </li>
                  <li>
                    <b>Applications</b>: Figma, VSCode, IntelliJ, Android Studio, <a href="https://www.credly.com/badges/95db5aa0-2310-4a42-b9e5-408e5d5ce095/public_url" target="_blank"
                  className="font-normal underline">Adobe Photoshop</a>, <a href="https://www.credly.com/badges/95db5aa0-2310-4a42-b9e5-408e5d5ce095/public_url" target="_blank"
                  className="font-normal underline">Adobe Premier Pro</a>
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
  );
}
