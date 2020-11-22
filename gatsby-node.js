/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

const path = require('path');

/**
 * @param {import('gatsby').CreatePagesArgs} param0
 */
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const template = path.resolve('src/templates/Product.jsx');
  const pages = await graphql(`
    {
      allPrismicProduct {
        edges {
          node {
            id
            uid
          }
        }
      }
    }
  `);

  pages.data.allPrismicProduct.edges.forEach((edge) => {
    createPage({
      path: `/${edge.node.uid}`,
      component: template,
      context: {
        uid: edge.node.uid,
      },
    });
  });
};
