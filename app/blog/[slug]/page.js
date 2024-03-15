'use client';
import {useEffect, useState} from 'react';
import Footer from '../../../components/footer';
import NavBar from '../../../components/navbar';
import PageTemplate from '../../../components/pageTemplate';
import blogContent from '../../../util/blogContent';
import {useRouter} from 'next/navigation';
import './../../../styles/blogs.css';
import React from 'react';

/**
 * Page component for rendering a blog post.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {Object} props.params - The route parameters.
 * @param {string} props.params.slug - The slug of the blog post.
 * @return {JSX.Element|null} The rendered page for the blog post
 */
export default function Page({params}) {
  const [blogs, setBlogs] = useState(null);
  let i = 0;
  useEffect(() => {
    if (i == 0) {
      (() => {
        i++;
        try {
          const response = fetch('/api/increment_views/' + params.slug);
          const data = response.json();
          setBlogs(data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      })();
    }
  }, []);

  const blog = blogContent.find((element) => element._id === params.slug);

  if (blog) {
    return (
      <PageTemplate>
        <div className='w-full h-full flex justify-center align-middle font-geist_sans'>
          <div className='w-full md:w-3/6 px-4 text-[#170202]'>
            <div className=''>
              <NavBar />
              <h1 className='text-2xl md:text-3xl font-semibold'>
                {blog.name}
              </h1>
              <p>
                {blog.date.toLocaleString('en-US', {
                  weekday: 'short',
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                })}
              </p>

              <div className='flex flex-row justify-between mb-6'></div>
              <div>{blog.content}</div>
              <div className='w-full h-8 md:h-11' />
              <Footer />
            </div>
          </div>
        </div>
      </PageTemplate>
    );
  } else {
    const router = useRouter();
    router.push('/404');
  }
}
