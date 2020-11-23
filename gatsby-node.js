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

  const categoryTemplate = path.resolve('src/templates/Category.jsx');
  const productTemplate = path.resolve('src/templates/Product.jsx');

  const categories = await graphql(`
    {
      allPrismicCategory {
        edges {
          node {
            uid
            prismicId
          }
        }
      }
    }
  `);

  const products = await graphql(`
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

  categories.data.allPrismicCategory.edges.forEach((edge) => {
    createPage({
      path: `/${edge.node.uid}`,
      component: categoryTemplate,
      context: {
        id: edge.node.prismicId,
      },
    });
  });

  products.data.allPrismicProduct.edges.forEach((edge) => {
    createPage({
      path: `/${edge.node.uid}`,
      component: productTemplate,
      context: {
        uid: edge.node.uid,
      },
    });
  });
};
