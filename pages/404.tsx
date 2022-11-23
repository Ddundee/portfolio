import Head from 'next/head';
import { useRouter } from 'next/router';
import '../styles/globals.css';

export default function Custom404() {
    const router = useRouter();
    return (
        <div>
            <Head>
                <title>404: This page could not be found</title>
            </Head>
            <div className='bg-gray-100 select-none selection:bg-pink-500 selection:text-white'>
                <div className='flex justify-center bg-white graph-bg'>
                    <div className='w-[1240px] px-10 bg-white min-h-screen flex justify-center items-center paper'>
                        <div className='flex flex-col gap-7'>
                            <div className='flex justify-center gap-7'>
                                <p>404</p>
                                <div className="h-5 w-px bg-[#111111]" />
                                <p>This page could not be found.</p>
                            </div>
                            <div className='flex justify-center'>
                                <button className='px-3 py-1 text-center text-white duration-150 bg-black border border-black border-opacity-100 rounded hover:duration-150 hover:bg-white hover:text-black' onClick={() => { router.push('/') }}>Go Home</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}