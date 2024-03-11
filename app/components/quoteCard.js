
"use client";
import { useEffect, useState } from "react";
import Skeleton from "./skeleton";
import { Toaster } from "react-hot-toast";


export default function QuoteCard({ }) {

  const quotes = [
    "There's not that much material that I can teach you, actually. I can write all the physics equations in one corner of the blackboard, and then all you need is an IQ of 5000 and you're set!",
    "Relativity and quantum didn't use to be taught in this class, which is a shame, because they are two of the sexiest topics in all of physics",
    "You can add vectors, multiply a vector by a number, flip vectors - the fun is just endless",

    "In this first problem, there is a car driving along a cliff, and the car just jumps off. This person has decided to end it all. Now, we want to know at what time the car hits the ground. This is the beauty of physics, because if this were a psychology class we'd want to know why the person was jumping, but we are simply concerned with how long it takes.",

    "Say you're firing a rocket launcher. What angle should you fire it at for maximum range? Say you fire it straight up. The good news is that it's going to be up in the air for a very long time. The bad news is that it's going to land on your head"
  ]

  const [curQuote, setCurQuote] = useState();
  useEffect(() => {
    setCurQuote(Math.round(Math.random() * (quotes.length - 1)))
  }, [])

  return (
      <div className="border-[#EB9393] bg-[#fbe8e8] border p-6 rounded-[6px] w-max text-[#170202] font-geist_sans">
      <h1 className="font-semibold text-lg text-bl ">Quote from my <span className="underline">GOAT</span>!</h1>
      <div className="w-full h-2" />
      {curQuote !== undefined ? (
        <p className=" font-normal text-sm w-[464px] h-max">{quotes[curQuote]}</p>
      ) : (
        <Skeleton height={12} />
      )}
      <div className="w-full h-4" />
      <div className="flex justify-end w-full h-full">
        <Button action={() => { setCurQuote((curQuote + 1) % quotes.length) }}>Next Quote &rarr;</Button>
      </div>
    </div>
    
  );
}