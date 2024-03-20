'use client';

import NavBar from '../../components/navbar';
import Footer from '../../components/footer';
import PageTemplate from '../../components/pageTemplate';
import QuoteCard from '../../components/quoteCard';

import BlogLink from '../../components/blogLink';
// import { MongoClient, ServerApiVersion } from "mongodb";
import blogContent from '../../util/blogContent';
import {useEffect, useState} from 'react';
import {titleCase} from 'title-case';

export default function Home() {
  const [blogs, setBlogs] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch('/api/blog');
        const data = await response.json();
        setBlogs(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    })();
  }, []);

  return (
    <PageTemplate>
      <div className='w-full h-full flex justify-center align-middle font-geist_sans'>
        <div className='w-full md:w-3/6 px-4 text-[#170202]'>
          <div className=''>
            <NavBar />
            <h1 className='text-2xl md:text-3xl font-semibold mb-6'>
              My blog... Your not supposed to be here?
            </h1>
            <div className='flex flex-col gap-6'>
              {blogs !== null && blogs !== undefined
                ? blogs.map((blog) => <BlogLink blog={blog} key={blog._id} />)
                : blogContent.map((blog) => (
                    <BlogLink blog={blog} key={blog._id} />
                  ))}
            </div>
            <div className='w-full h-8 md:h-11' />
            <Footer />
          </div>
        </div>
      </div>
    </PageTemplate>
  );
}
