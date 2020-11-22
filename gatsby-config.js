/* eslint global-require: "off" */
module.exports = {
  siteMetadata: {},

  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-postcss`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-svg`,
    {
      resolve: `gatsby-source-prismic`,
      options: {
        repositoryName: `steelseries`,
        lang: '*',
        shouldDownloadImage: () => true,
        schemas: {
          product: require('./schemas/product.json'),
          homepage: require('./schemas/homepage.json'),
        },
      },
    },
  ],
};
