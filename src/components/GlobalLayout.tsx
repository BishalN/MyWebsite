import React from 'react';
import Helmet from 'react-helmet';
import { useSiteMetaData } from '../hooks/useSiteMetaData';

export const GlobalLayout = ({ children }) => {
  const { title, description } = useSiteMetaData();
  return (
    <main>
      <Helmet>
        <html lang='en' />
        <title>{title}</title>
        <meta name='description' content={description} />
      </Helmet>
      {children}
    </main>
  );
};
