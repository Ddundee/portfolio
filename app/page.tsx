import Link from 'next/link';
import '../styles/globals.css';

export default async function Page() {
    let date = new Date();
    let currentDate = (date.getMonth() + 1) + "/" + date.getDate() + "/" + date.getFullYear();
    return (<div className='bg-gray-100 selection:bg-pink-500 selection:text-white noise'>
        <div className='flex justify-center bg-white graph-bg'>
            <div className='w-[1240px] px-10 bg-white min-h-screen paper'>
                <div className='w-full h-3' />
                <div className='flex justify-end w-full'>
                    <Link href='/snippets'><button className='px-3 py-1 text-center text-black duration-150 bg-white border border-black border-opacity-100 rounded hover:text-white hover:bg-black hover:duration-150'>Snippets &rarr;</button></Link>
                </div>
                <div className='w-full h-52' />
                <p>Published on: {currentDate}</p>
                <h1 className='mb-3 text-6xl font-bold leading-tight text-gray-900'>Sup, I am <span className='rounded pt-px pb-[2px] gradient-bg'>Dhanush</span></h1>
                {/* <p className='text-lg'>A 16 year-old who is a half-assed UI/UX Designer, Fullstack Developer, and Certified Video Designer based near Dallas, Texas.</p> */}
                <p className='text-lg'>A 16 year-old based near Dallas, Texas.</p>
                <div className='flex flex-wrap gap-2 mt-3'>

                    <p className='px-3 py-2 duration-200 bg-black rounded bg-opacity-5 hover:bg-opacity-10'>UI/UX Designer</p>
                    <p className='px-3 py-2 duration-200 bg-black rounded bg-opacity-5 hover:bg-opacity-10'>Fullstack Developer</p>
                    <a href='https://www.credly.com/badges/95db5aa0-2310-4a42-b9e5-408e5d5ce095' target="_blank" rel="noreferrer" className='px-3 py-2 duration-200 bg-black rounded bg-opacity-5 hover:bg-opacity-10'>Certified Video Designer</a>
                </div>
                <div className='w-full h-10' />
                <div className='my-3 text-3xl font-semibold'>Skillset</div>
                <div className='flex flex-col gap-3 md:flex-row'>
                    <div className='w-full p-3 bg-white border border-gray-500 rounded-lg lg:w-72'>
                        <h2 className='pb-3 text-2xl font-medium text-center'>Applications</h2>
                        <div className='flex flex-wrap gap-1'>
                            <p className='place-content-start selection:bg-[#31a9f7] text-[#31a9f7] bg-[#31a9f7] bg-opacity-20 rounded-sm py-1 px-2' >Adobe Photoshop</p>
                            <p className='place-content-start selection:bg-[#000058] text-[#000058] bg-[#000058] bg-opacity-20 rounded-sm py-1 px-2' >Adobe Premier Pro</p>
                            <p className='place-content-start selection:bg-[#f75eee] text-[#f75eee] bg-[#f75eee] bg-opacity-20 rounded-sm py-1 px-2' >Adobe XD</p>
                        </div>
                    </div>
                    <div className='w-full p-3 bg-white border border-gray-500 rounded-lg lg:w-72'>
                        <h2 className='pb-3 text-2xl font-medium text-center'>Languages</h2>
                        <div className='flex flex-wrap gap-1'>
                            <p className='place-content-start selection:bg-[#e96228] text-[#e96228] bg-[#e96228] bg-opacity-20 rounded-sm py-1 px-2' >HTML5</p>
                            <p className='place-content-start selection:bg-[#2862e9] text-[#2862e9] bg-[#2862e9] bg-opacity-20 rounded-sm py-1 px-2' >CSS3</p>
                            <p className='place-content-start selection:bg-[#eb2e30] text-[#eb2e30] bg-[#eb2e30] bg-opacity-20 rounded-sm py-1 px-2' >Java</p>
                            <p className='place-content-start selection:bg-[#e9d318] text-[#e9d318] bg-[#e9d318] bg-opacity-20 rounded-sm py-1 px-2' >Javascript</p>
                            <p className='place-content-start selection:bg-[#356c9b] text-[#356c9b] bg-[#356c9b] bg-opacity-20 rounded-sm py-1 px-2' >Python</p>
                        </div>
                    </div>
                    <div className='w-full p-3 bg-white border border-gray-500 rounded-lg lg:w-72'>
                        <h2 className='pb-3 text-2xl font-medium text-center'>Frameworks<span className='select-all'>...</span></h2>
                        <div className='flex flex-wrap gap-1'>
                            <p className='place-content-start selection:bg-[#3c873a] text-[#3c873a] bg-[#3c873a] bg-opacity-20 rounded-sm p-1' >NodeJS</p>
                            <p className='place-content-start selection:bg-[#111111] text-[#111111] bg-[#111111] bg-opacity-20 rounded-sm p-1' >NextJS</p>
                            <p className='place-content-start selection:bg-[#5ed3f3] text-[#5ed3f3] bg-[#5ed3f3] bg-opacity-20 rounded-sm p-1' >ReactJS</p>
                            <p className='place-content-start selection:bg-[#9feaf9] text-[#9feaf9] bg-[#9feaf9] bg-opacity-20 rounded-sm p-1' >Electron</p>
                            <p className='place-content-start selection:bg-[#38bdf8] text-[#38bdf8] bg-[#38bdf8] bg-opacity-20 rounded-sm p-1' >TailwindCSS</p>
                            <p className='place-content-start selection:bg-[#6d07f4] text-[#6d07f4] bg-[#6d07f4] bg-opacity-20 rounded-sm p-1' >Bootstrap</p>



                        </div>
                    </div>
                </div>
                <div className='w-full h-10' />
                <div className='my-3 text-3xl font-semibold'>Socials</div>
                <div className='flex flex-col gap-3 md:flex-row'>
                    <a href='https://www.github.com/Ddundee' className='selection:bg-[#2867b2] text-[#2867b2] bg-[#2867b2] bg-opacity-20 hover:bg-opacity-25 duration-300 ease-in-out px-24 py-4 text-center items-center rounded-lg'>Github</a>
                    <a href='https://www.linkedin.com/in/dhanush-reddy-chilakala-5a165b227' className='selection:bg-[#287bb2] text-[#287bb2] bg-[#287bb2] bg-opacity-20 hover:bg-opacity-25 duration-300 ease-in-out px-24 py-4 text-center items-center rounded-lg'>Linkedin</a>
                    <a href='mailto:dhanush.actual1@gmail.com' className='selection:bg-[#e34033] text-[#e34033] bg-[#e34033] bg-opacity-20 hover:bg-opacity-25 duration-300 ease-in-out px-24 py-4 text-center items-center rounded-lg'>Email</a>
                </div>
                {/* <p className='sticky text-gray-600'>© 2022 Dhanush.</p> */}
                <div className='w-full h-10' />
            </div>
        </div>
    </div>

    )
}