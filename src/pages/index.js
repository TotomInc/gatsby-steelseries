import React from 'react';
import { graphql } from 'gatsby';

import { Card } from '../components/product/Card';

export const query = graphql`
  {
    allPrismicProduct {
      edges {
        node {
          id
          uid

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
            is_new
            is_web_only
          }
        }
      }
    }
  }
`;

const IndexPage = ({ data: { allPrismicProduct } }) => {
  const products = allPrismicProduct.edges
    .map((edge) => edge.node)
    .map((node) => ({
      id: node.id,
      uid: node.uid,
      ...node.data,
    }));

  return (
    <div className="p-8">
      <h1 className="font-replica-pro font-black text-4xl mb-8">All our products</h1>

      <div className="flex flex-wrap max-w-screen-2xl 2xl:mx-auto">
        {products.map((product) => (
          <Card product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default IndexPage;
