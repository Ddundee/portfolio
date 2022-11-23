"use client";
import React, { Fragment, ReactNode, SetStateAction, useState } from 'react';
import '../styles/globals.css';

export default function Home() {
    let [square, setSquare]: any = useState();
    return (
        <div className='selection:bg-pink-500 selection:text-white'>
            <div className='flex justify-center'>
                <div className='w-[1540px] px-5'>
                    <div className='w-full h-52' />
                    <div>
                        <h1 className='font-semibold text-6xl capitalize leading-tight text-gray-900'>Hello, I am <span className='rounded pt-px pb-[2px] gradient-bg'>Dhanush</span></h1>
                        <p className='text-lg'>A 16 year-old designer and fullstack developer.</p>
                    </div>
                    <div className='w-full h-10' />
                    <div className='flex flex-col flex-wrap md:flex-row gap-3'>
                        <a href='https://www.github.com/Ddundee' className='selection:bg-[#2867b2] text-[#2867b2] bg-[#2867b2] bg-opacity-20 hover:bg-opacity-25 duration-300 ease-in-out px-24 py-4 text-center items-center rounded-lg'>Github</a>
                        <a href='https://www.linkedin.com/in/dhanush-reddy-chilakala-5a165b227' className='selection:bg-[#287bb2] text-[#287bb2] bg-[#287bb2] bg-opacity-20 hover:bg-opacity-25 duration-300 ease-in-out px-24 py-4 text-center items-center rounded-lg'>Linkedin</a>
                    </div>
                    {/* <p className='text-gray-600 sticky'>© 2022 Dhanush.</p> */}

                </div>
            </div>
        </div>
    )
}