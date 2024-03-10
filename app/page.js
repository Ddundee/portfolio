"use client";

import { useEffect, useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import QuoteCard from "./components/quoteCard";
import { motion } from "framer-motion";

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
        },);
      } else {
        requestAnimationFrame(updateLoadingPercentage);
      }
    };

    requestAnimationFrame(updateLoadingPercentage);
  }, []);

  if (!pageLoaded) return <Loading percentage={loadingPercentage} />;
  else
    return (
      <div className="w-full h-full flex justify-center align-middle">
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
        <div>Hello</div>
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
  return (
    <div className="w-[579px]">
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: (percentage / 100) * 531 }}
        transition={{ ease: "linear", duration: 0.5 }}
        className="w-12 h-12 rounded-full border-[#170202] border-[3px]"
      />
      <div className="h-[3px] bg-[#170202] w-[579px] rounded-full" />
    </div>
  );
}