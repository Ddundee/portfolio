"use client";
import React from 'react'
import { Card } from '@/components/ui/card';

export default function AboutMe() {
    return (
        <Card id='about' className='flex flex-wrap py-48 md:flex-row flex-col px-4 gap-8'>
            <div className='flex-1 w-full h-full flex flex-col justify-center items-center'>
                <h2 className='text-3xl font-bold'>About Me</h2>
                <i>*Insert a subtitle here*</i>
            </div>
            <div className='flex gap-6 flex-col flex-1 md:mr-10 max-w-[640px]'>
                <p>
                    Hi, I{"'"}m Dhanush Chilakala, a freshman at Virginia Tech majoring in Computer Science. I specialize in frontend development, having worked with frameworks like Next.js. For the past couple years, I have also participated in Robotics.
                </p>
                <div>
                    <p>Current Goals:</p>
                    <ul className='list-disc ml-7'>
                        <li>Actually start creating Brawl Bets</li>
                        <li>Finish making Brawl Bets</li>
                        <li>Get the AWS Cloud Practitioner Certification</li>
                        <li>Keep up with college hw 😭</li>


                    </ul>
                </div>
            </div>
        </Card>
    )
}