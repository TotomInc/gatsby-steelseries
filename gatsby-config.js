module.exports = {
  siteMetadata: {},

  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-emotion`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `@prismicio/gatsby-source-prismic-graphql`,
      options: {
        repositoryName: `steelseries`,
        defaultLang: 'en-us',
        previews: false,
      },
    },
  ],
};
