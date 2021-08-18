import { Link } from '@reach/router';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';

export const PostCard = ({ post }) => {
  const image = getImage(post.image);

  // A post card has the title on the top then a img in the body followed by the published date
  return (
    <Link to={post.slug}>
      <div className='h-auto max-h-96 bg-gray-100 rounded-xl overflow-hidden'>
        <h3 className='font-bold p-3 text-center text-gray-800 truncate'>
          {post.title}
        </h3>
        <GatsbyImage
          image={image}
          alt={post.author}
          className='cursor-pointer max-h-60'
        />
        <p className='p-2 text-gray-500'>{post.date}</p>
      </div>
    </Link>
  );
};
