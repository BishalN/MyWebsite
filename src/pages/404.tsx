import { Link } from 'gatsby';
import React from 'react';
import { GlobalLayout } from '../components/GlobalLayout';

const NotFoundPage = () => {
  return (
    <GlobalLayout>
      <div className='flex justify-center items-center flex-col h-screen'>
        <h1 className='text-blue-500 font-bold text-3xl'>
          Oops! The page we're looking for was not found
        </h1>

        <Link to='/'>
          <p className='text-2xl text-blue-700 '>&larr; Go Back home</p>
        </Link>
      </div>
    </GlobalLayout>
  );
};

export default NotFoundPage;
