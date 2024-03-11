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

import SmoothScroll from "./components/smoothScroll";
import NavBar from "./components/navbar";
import Footer from "./components/footer";

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
          // handleToastDismiss();
          setPageLoaded(true);
        }, 1);
      } else {
        requestAnimationFrame(updateLoadingPercentage);
      }
    };

    requestAnimationFrame(updateLoadingPercentage);
  }, []);


  // if (!pageLoaded) return <Loading percentage={loadingPercentage} />;
  // else
  return (
    <SmoothScroll>
      {/* <CustomCursor /> */}
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
    </SmoothScroll>
  );
}

// let handleToastDismiss;

// function Loading({ percentage }) {
//   const toastRef = useRef(null);

//   const handleDismiss = () => {
//     if (toastRef.current !== null) {
//       toast.dismiss(toastRef.current);
//       toastRef.current = null;
//     }
//   };

//   useEffect(() => {
//     if (toastRef.current === null) {
//       toastRef.current = toast((t) => <QuoteCard />, {
//         duration: Infinity,
//       });
//     }

//     handleToastDismiss = handleDismiss;
//     return handleDismiss;
//   }, []);

//   return (
//     <div className="font-geist_sans">
//       <Toaster
//         position="bottom-left"
//         reverseOrder={false}
//         toastOptions={{
//           style: {
//             background: "none",
//             boxShadow: "none",
//             padding: "0",
//             margin: "0",
//             border: "none",
//           },
//         }}
//       />
//       <div className="w-screen h-screen flex justify-center items-center">
//         <div>
//           <ProgressBar percentage={percentage} />
//           <div className="w-full h-[14px]" />
//           <div className="flex justify-center text-[#170202] font-normal text-xl">
//             <p>{percentage}%</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// function ProgressBar({ percentage }) {
//   const [screenWidth, setScreenWidth] = useState(0);

//   useEffect(() => {
//     const handleResize = () => {
//       setScreenWidth(window.innerWidth);
//     };

//     setScreenWidth(window.innerWidth);
//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   return (
//     <div className="w-full md:w-[579px]">
//       <motion.div
//         initial={{ x: 0 }}
//         animate={{ x: (percentage / 100) * (screenWidth < 768 ? screenWidth - 48 : 531) }}
//         transition={{ ease: "linear", duration: 0.5 }}
//         className="w-12 h-12 rounded-full border-[#170202] border-[3px]"
//       />
//       <div className="h-[3px] bg-[#170202] w-full md:w-[579px] rounded-full" />
//     </div>
//   );
// }
