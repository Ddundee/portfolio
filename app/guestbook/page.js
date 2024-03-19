import React from 'react';
import PageTemplate from '../../components/pageTemplate';
import NavBar from '../../components/navbar';
import Footer from '../../components/footer';

function page() {
  return (
    <PageTemplate>
      <div className='w-full min-h-screen flex justify-center align-middle font-geist_sans'>
        <div className='w-full md:w-3/6 px-4 text-[#170202]'>
          <div className=''>
            <NavBar />
            <h1 className='text-2xl md:text-3xl font-semibold mb-6'>
              Guestbook
            </h1>
            <div className='flex flex-col gap-6'>
              COMING WHENEVER I GOT ENOUGH CLOUT
            </div>
            <div className='w-full h-8 md:h-11' />
            <Footer />
          </div>
        </div>
      </div>
    </PageTemplate>
  );
}

export default page;
