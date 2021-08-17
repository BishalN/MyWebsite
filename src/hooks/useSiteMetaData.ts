import { graphql, useStaticQuery } from 'gatsby';

export const useSiteMetaData = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          headingTitle
          favTechnologies
          social {
            media
            link
          }
        }
      }
    }
  `);

  return data.site.siteMetadata;
};
