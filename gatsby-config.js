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
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: '\u0016',
      },
    },
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
        name: 'posts',
        path: './src/posts/',
      },
      __key: 'posts',
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        defaultLayouts: {
          default: require.resolve('./src/components/layout.tsx'),
        },
        gatsbyRemarkPlugins: [{ resolve: 'gatsby-remark-images' }],
        plugins: [{ resolve: 'gatsby-remark-images' }],
      },
    },
    {
      resolve: 'gatsby-plugin-webpack-bundle-analyzer',
      options: {
        production: true,
        disable: !process.env.ANALYZE_BUNDLE_SIZE,
        generateStatsFile: true,
        analyzerMode: 'static',
      },
    },
  ],
};
