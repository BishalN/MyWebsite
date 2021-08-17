import React from 'react';
import { GatsbyImage, getImage, StaticImage } from 'gatsby-plugin-image';

const PostPreview = ({ post }) => {
  const image = getImage(post.image);
  console.log(post.image);
  console.log(image);

  return (
    <div className='flex flex-col sm:flex-row justify-center space-x-5'>
      <GatsbyImage image={image} alt={post.author} />

      <div>
        <p className='font-semibold text-gray-700 text-lg max-w-lg'>
          {post.excerpt}
        </p>
        <p className='text-gray-400 text-base'>by {post.author}</p>
      </div>
    </div>
  );
};

export default PostPreview;
