// "use client";
import { Snippet } from '@geist-ui/core';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import '../../styles/globals.css';

export default async function Page() {

    // const { push } = useRouter();

    let date = new Date();
    let currentDate = (date.getMonth() + 1) + "/" + date.getDate() + "/" + date.getFullYear();
    return (<div className='bg-gray-100 selection:bg-pink-500 selection:text-white noise'>
        <div className='flex justify-center bg-white graph-bg'>
            <div className='w-[1240px] px-10 bg-white min-h-screen paper'>
                <div className='w-full h-3' />
                <div className='flex justify-end w-full'>
                    <Link href='/'><button className='px-3 py-1 text-center text-white duration-150 bg-black border border-black border-opacity-100 rounded select-none hover:duration-150 hover:bg-white hover:text-black'>Go Home</button></Link>
                </div>
                <div className='w-full h-52' />
                <p>Published on: {currentDate}</p>
                <h1 className='mb-3 text-6xl font-bold leading-tight text-gray-900 capitalize'>Snippets</h1>
                <p className='text-lg'>These are a collection of code snippets I&apos;ve used in the past and saved.</p>
                <div className='w-full h-10' />
                {/* <Snippet text={['cd project', 'now']} width="300px" /> */}
                {/* <ul className='pl-5 
                    <li className='text-blue-500 underline duration-200 hover:text-blue-700'>Prettier Configuration</li>
                </ul> */}
                {/* <div>
                    <h1>Prettier Configuration</h1>
                    
                </div> */}
            </div>
        </div>
    </div >

    )
}