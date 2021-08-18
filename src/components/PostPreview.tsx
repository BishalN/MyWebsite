import React from 'react';
import { GatsbyImage, getImage, StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';

const PostPreview = ({ post }) => {
  const image = getImage(post.image);

  return (
    <div className='flex flex-col sm:flex-row justify-center sm:space-x-10 overflow-hidden'>
      <div>
        <Link to={post.slug}>
          <GatsbyImage
            image={image}
            alt={post.author}
            className='cursor-pointer max-h-72 rounded-lg'
          />
        </Link>
      </div>
      <div className='w-96'>
        <p className='font-semibold text-gray-700 text-lg w-auto'>
          {post.title}
        </p>
        <p className='mt-3 font-normal text-gray-500 w-auto'>{post.excerpt}</p>
        <p className='text-gray-400 text-base'>{post.date}</p>
        <Link to={post.slug}>
          <p className='text-blue-500'>Read Blog</p>
        </Link>
      </div>
    </div>
  );
};

export default PostPreview;
