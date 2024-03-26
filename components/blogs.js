'use client';
import React, {useEffect, useState} from 'react';
import BlogLink from './blogLink';
import blogContent from '../util/blogContent';

export default function Blog() {
  const [blogs, setBlogs] = useState([]);

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
    <div className='flex flex-col gap-6'>
      {blogs !== null && blogs !== undefined
        ? blogs.map((blog) => <BlogLink blog={blog} key={blog._id} />)
        : blogContent.map((blog) => <BlogLink blog={blog} key={blog._id} />)}
    </div>
  );
}
