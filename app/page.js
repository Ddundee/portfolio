"use client";

import { useEffect, useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import QuoteCard from "./components/quoteCard";
import { motion } from "framer-motion";
import Link from "next/link";
import { Bevan } from "next/font/google";
import Image from "next/image";
import pic1 from "./../public/1.webp";
import pic2 from "./../public/2.webp";

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
            <div className="flex flex-wrap my-12 md:my-24 text-xl md:text-2xl font-light gap-5">
              <Link href="/">
                <p className="hover:text-opacity-55">home</p>
              </Link>
              <Link href="/work" className="">
                work
              </Link>

              <a
                target="_blank"
                href="https://drive.google.com/file/d/1q4tTF27m2pFdxWP0s7qeozUpbjWhLuUg/view?usp=sharing"
                className=""
              >
                resume &rarr;
              </a>
            </div>
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
              <div className="flex flex-col md:flex-row gap-7">
                <div className="flex flex-col gap-7">
                  <div className="w-full md:w-80 h-80 border rounded-[6px] hover:shadow-lg duration-1000 transition-all shadow-none overflow-hidden">
                    <Image src={pic1} width={80 * 100} height={80 * 100} />
                  </div>
                  <div className="w-full md:w-80 h-80 border rounded-[6px] hover:shadow-lg duration-1000 transition-all shadow-none overflow-hidden">
                    <Image src={pic2} width={80 * 100} height={80 * 100} />
                  </div>
                </div>
                <div className="flex flex-col gap-7">
                  <div className="w-full md:w-80 h-96 border rounded-[6px] hover:shadow-lg duration-1000 transition-all shadow-none overflow-hidden">
                    <Image src={pic1} width={80 * 100} height={96 * 100} />
                  </div>
                  <div className="w-full md:w-80 h-64 border rounded-[6px] hover:shadow-lg duration-1000 transition-all shadow-none overflow-hidden">
                    <Image src={pic1} width={80 * 100} height={64 * 100} />
                  </div>
                </div>
                <div className="flex flex-col gap-7">
                  <div className="w-full md:w-80 h-56 border rounded-[6px] hover:shadow-lg duration-1000 transition-all shadow-none overflow-hidden">
                    <Image src={pic1} width={80 * 100} height={56 * 100} />
                  </div>
                  <div className="w-full md:w-80 h-[416px] border rounded-[6px] hover:shadow-lg duration-1000 transition-all shadow-none overflow-hidden">
                    <Image src={pic1} width={80 * 92} height={80 * 100} />
                  </div>
                </div>
              </div>
              <p className="text-xl md:text-2xl font-light">
                Recently, I've developed an interest in Machine Learning. I'm
                currently working on an AI that attempts solves a{" "}
                <span className={bevan.className}>Wordle</span> in the fewest
                attempts possible.
              </p>
              <div className="w-full h-8 md:h-11" />
            </div>
          </div>
        </div>
      </div>
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
