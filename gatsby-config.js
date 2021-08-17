module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.yourdomain.tld',
    title: 'MyWebsite',
    headingTitle:
      ' I’m full stack developer focusing on creating software solution',
    favTechnologies: ['React', 'Node', 'Typescript', 'Postgres', 'Mongodb'],
    social: [
      { media: 'github', link: 'https://github.com/bishaln' },
      { media: 'linkedin', link: 'https://www.linkedin.com/in/bishaln/' },
      { media: 'twitter', link: 'https://twitter.com/biishalneupane' },
    ],
  },
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-postcss',
    'gatsby-plugin-typescript',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: '\u0016',
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-mdx',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
    },
  ],
};
