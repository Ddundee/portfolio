'use client';
import {X} from 'lucide-react';
import React, {useState} from 'react';

function Sticky({
  title,
  text,
  closeFunction,
}: {
  title?: string;
  text: string;
  closeFunction: Function;
}) {
  return (
    <div className='w-72'>
      <div className='bg-[#e6b905] h-9 text-md md:text-lg font-medium items-center flex justify-between'>
        <p className='m-2'>{title ? title : 'Sticky Note'}</p>

        <div
          className='h-full w-9 hover:bg-black flex justify-center items-center border select-none'
          onClick={() => {
            closeFunction();
          }}
        >
          <b>X</b>
        </div>
      </div>
      <div className='w-full bg-[#170202] text-[#f5f5f5] p-2'>
        <p className=''>{text}</p>
      </div>
    </div>
  );
}

export default Sticky;
