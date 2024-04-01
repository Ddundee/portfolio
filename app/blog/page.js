import NavBar from '../../components/navbar';
import Footer from '../../components/footer';
import PageTemplate from '../../components/pageTemplate';
import QuoteCard from '../../components/quoteCard';

import BlogLink from '../../components/blogLink';
// import { MongoClient, ServerApiVersion } from "mongodb";
<<<<<<< HEAD
import {titleCase} from 'title-case';
import Blogs from '../../components/blogs';
=======
import blogContent from '../../util/blogContent';
import { useEffect, useState } from 'react';
import { titleCase } from 'title-case';
>>>>>>> parent of 9bbcc3b (# Please include a useful commit message!)

export default function Home() {
  return (
    <PageTemplate>
      <div className='w-full h-full flex justify-center align-middle font-geist_sans'>
        <div className='w-full md:w-3/6 px-4 text-[#170202]'>
          <div className=''>
            <NavBar />
            <h1 className='text-2xl md:text-3xl font-semibold mb-6'>
              My blog... Your not supposed to be here?
            </h1>
            <Blogs />
            <div className='w-full h-8 md:h-11' />
            <Footer />
          </div>
        </div>
      </div>
    </PageTemplate>
  );
}
