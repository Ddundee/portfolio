'use client';
import React, { useEffect, useState } from 'react';
import Skeleton from './skeleton';

export default function ProjectCard({ bg, href, name }) {
  if (!bg) bg = 'bg-[#fbe8e8]';
  if (!name) name = 'Untitled';
  return (
    <a
      className={
        (href ? 'hover:underline' : '') + ' duration-75 select-none w-full'
      }
      href={href}
      target='_blank'
      rel='noreferrer'
    >
      <div
        className={`rounded-[6px] text-[#170202] font-geist_sans h-64 border border-[#170202] ${bg} bg-blend-overlay`}
      ></div>
      <h4 className='text-base uppercase'>{name}</h4>
    </a>
  );
}
