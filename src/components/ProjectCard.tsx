import React from 'react';

export function ProjectCard({ title, url }) {
  return (
    <div className='bg-gray-200 p-4 rounded-xl '>
      <h4 className='font-bold text-xl text-blue-500'>{title}</h4>
      <a
        href={url}
        target='_blank'
        rel='noopener noreferrer'
        className='text-sm'
      >
        Check it out
      </a>
    </div>
  );
}
