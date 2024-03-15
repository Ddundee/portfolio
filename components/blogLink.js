'use client';

import {useState} from 'react';
import Link from 'next/link';
import {titleCase} from 'title-case';
import Skeleton from './skeleton';

export default function BlogLink({blog}) {
  if (!blog.title) {
    blog.title = 'Untitled';
    blog.id = '/404';
  }

  return (
    <div className='hover:opacity-65 duration-500'>
      <Link href={'/blog/' + blog._id}>
        <h1 className='text-xl md:text-2xl font-light'>
          {titleCase(blog.name.split('-').join(' '))}
        </h1>
        <p>{blog.views} views</p>
      </Link>
    </div>
  );
}
