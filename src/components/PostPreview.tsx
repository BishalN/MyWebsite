import React from 'react';

const PostPreview = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-center space-x-5'>
      <div className='bg-gray-200 p-4 rounded-lg w-4/12 h-40'></div>
      <div>
        <p className='font-semibold text-gray-700 text-lg max-w-lg'>
          This is the title of the posts Lorem ipsum dolor sit amet consectetur
          adipisicing elit. This is the title of the posts Lorem ipsum dolor sit
          amet consectetur adipisicing elit.
        </p>
        <p className='text-gray-400 text-base'>24th March, 2020</p>
      </div>
    </div>
  );
};

export default PostPreview;
