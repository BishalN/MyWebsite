import { Link } from 'gatsby';
import React from 'react';
import { PostCard } from '../components/PostCard';
import usePosts from '../hooks/usePosts';

const Blogs = () => {
  const posts = usePosts();
  return (
    <div className='container px-2 mx-auto'>
      <Link to='/'>
        <h5 className='p-3 text-blue-500'>&larr; Go Back to home</h5>
      </Link>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5'>
        {posts.map((post) => (
          <PostCard post={post} />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
