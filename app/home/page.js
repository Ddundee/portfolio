import Link from 'next/link';
import PageTemplate from '../../components/pageTemplate';
import React from 'react';

/**
 * Home component for rendering the home page.
 *
 * @component
 * @return {JSX.Element} The rendered home page.
 */
export default function Home() {
  return (
    <PageTemplate>
      <div className='w-full h-full flex justify-center align-middle font-geist_sans'>
        <div className='w-full md:w-3/6 px-4 text-[#170202]'>
          <div className=''>
            <div className='flex flex-wrap my-12 md:my-24 text-xl md:text-2xl font-light gap-5 [&>a]:hover:text-opacity-5'>
              <Link href='/'>
                <p className=''>home</p>
              </Link>
              <Link href='/work' className=''>
                work
              </Link>
              <Link href='/blog'>blog</Link>
              <Link href='/guestbook'>guestbook</Link>

              <a
                target='_blank'
                href='https://drive.google.com/file/d/1q4tTF27m2pFdxWP0s7qeozUpbjWhLuUg/view?usp=sharing'
                className=''
                rel='noreferrer'
              >
                resume &rarr;
              </a>
            </div>
            <h1 className='text-2xl md:text-3xl font-semibold'>
              Calling security
            </h1>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
}
