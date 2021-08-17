import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import { useSiteMetaData } from '../hooks/useSiteMetaData';
import { usePosts } from '../hooks/usePosts';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { ProjectCard } from '../components/ProjectCard';
import PostPreview from '../components/PostPreview';

const Index = () => {
  const data = useSiteMetaData();
  const posts = usePosts();

  return (
    <div className='container mx-auto px-4'>
      <div className='flex flex-col-reverse md:flex-row justify-evenly items-center mt-10'>
        <div className='max-w-md'>
          <h1 className='font-bold text-xl text-center md:text-left md:text-4xl text-blue-500 '>
            {data.headingTitle}
          </h1>

          <div className='bg-gray-100 mt-10 rounded-md p-2 text-center max-w-md flex space-x-4 flex-wrap'>
            {data.favTechnologies.map((tech: string) => (
              <p key={tech} className='text-gray-800 '>
                {tech}
              </p>
            ))}
          </div>

          <div
            className='bg-gray-100 p-2 mt-5 rounded-md max-w-md flex space-x-10 items-center
            flex-wrap space-x-10'
          >
            {data.social.map((social) => (
              <a
                href={social.link}
                key={social.link}
                target='_blank'
                rel='noopener noreferrer'
              >
                {social.media.includes('github') && (
                  <FaGithub size={30} className='cursor-pointer' />
                )}

                {social.media.includes('twitter') && (
                  <FaTwitter size={30} className='cursor-pointer' />
                )}

                {social.media.includes('linkedin') && (
                  <FaLinkedin size={30} className='cursor-pointer' />
                )}
              </a>
            ))}
          </div>
        </div>
        <div className=''>
          <StaticImage
            className='rounded-full '
            alt='Bishal Neupane'
            src='../images/profile.jpg'
            width={300}
            height={300}
          />
          <h3 className='text-center mt-3 font-bold text-gray-600'>
            Bishal Neupane
          </h3>
        </div>
      </div>
      <section id='My Projects'>
        <p className='text-center mt-10'>My Projects</p>
        <div className='flex flex-col space-y-10 sm:flex-row sm:space-y-0  justify-evenly mt-10 '>
          <ProjectCard
            title='TimeXoneSyncer'
            url='https://timexonesyncer.tech/'
          />
          <ProjectCard
            title='SingAndShare'
            url='https://sing-share.vercel.app/'
          />
        </div>
      </section>

      <section id='posts' className='space-y-10 mt-20'>
        {posts.map((post) => (
          <PostPreview key={post.slug} post={post} />
        ))}
      </section>
    </div>
  );
};

export default Index;
