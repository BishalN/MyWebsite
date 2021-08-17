import React from 'react';
import { GatsbyImage, getImage, StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';

const PostPreview = ({ post }) => {
  const image = getImage(post.image);
  console.log(post.image);
  console.log(image);

  return (
    <div className='flex flex-col sm:flex-row justify-center space-x-5'>
      <Link to={post.slug}>
        <GatsbyImage
          image={image}
          alt={post.author}
          className='cursor-pointer'
        />
      </Link>
      <div>
        <p className='font-semibold text-gray-700 text-lg max-w-lg'>
          {post.excerpt}
        </p>
        <p className='text-gray-400 text-base'>{post.date}</p>
        <Link to={post.slug}>
          <p className='text-blue-500'>Read Blog</p>
        </Link>
      </div>
    </div>
  );
};

export default PostPreview;
