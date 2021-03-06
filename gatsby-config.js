/* eslint global-require: "off" */
module.exports = {
  siteMetadata: {
    siteUrl: 'https://steelseries.totominc.io',
  },

  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-postcss`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-svg`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: `src/images/icon.png`,
      },
    },
    {
      resolve: `gatsby-source-prismic`,
      options: {
        repositoryName: `steelseries`,
        lang: '*',
        shouldDownloadImage: () => true,
        schemas: {
          category: require('./schemas/category.json'),
          product: require('./schemas/product.json'),
          homepage: require('./schemas/homepage.json'),
        },
      },
    },
  ],
};
