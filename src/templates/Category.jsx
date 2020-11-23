import React from 'react';
import { graphql } from 'gatsby';

import { Card } from '../components/product/Card';

export const query = graphql`
  query CategoryProducts($id: ID!) {
    prismicCategory(prismicId: { eq: $id }) {
      data {
        name {
          text
        }
      }
    }

    allPrismicProduct(filter: { data: { category: { id: { eq: $id } } } }) {
      edges {
        node {
          uid
          id

          data {
            title {
              text
            }

            card_description {
              html
            }

            card_image {
              localFile {
                childImageSharp {
                  original {
                    src
                  }
                }
              }
            }

            price
            member_price
            member_discount
            is_new
            is_web_only
          }
        }
      }
    }
  }
`;

const Category = ({ data: { prismicCategory, allPrismicProduct } }) => {
  const category = prismicCategory.data;
  const { edges } = allPrismicProduct;

  const products = edges.map((edge) => ({
    ...edge.node.data,
    id: edge.node.id,
    uid: edge.node.uid,
  }));

  return (
    <>
      <div className="px-8 py-4">
        <h1 className="font-replica-pro font-black text-black text-4xl">{category.name.text}</h1>
      </div>

      <div className="px-6">
        <div className="flex flex-wrap max-w-screen-2xl 2xl:mx-auto">
          {products.map((product) => (
            <Card product={product} key={product.id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Category;
