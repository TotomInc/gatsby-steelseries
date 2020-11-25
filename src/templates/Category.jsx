import React from 'react';
import { graphql } from 'gatsby';

import { Card } from '../components/product/Card';
import { SEO } from '../components/SEO';

export const query = graphql`
  query CategoryProducts($id: ID!) {
    prismicCategory(prismicId: { eq: $id }) {
      uid

      data {
        name {
          text
        }

        description {
          html
        }

        page_title {
          text
        }

        page_description {
          text
        }

        page_url {
          text
        }

        share_title {
          text
        }

        share_description {
          text
        }

        media_share_image {
          localFile {
            childImageSharp {
              original {
                src
              }
            }
          }
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
  const category = {
    ...prismicCategory.data,
    uid: prismicCategory.uid,
  };

  const { edges } = allPrismicProduct;

  const products = edges.map((edge) => ({
    ...edge.node.data,
    id: edge.node.id,
    uid: edge.node.uid,
  }));

  return (
    <>
      <SEO
        pageTitle={category.page_title.text}
        pageDescription={category.page_description.text}
        pageUrl={`https://steelseries.totominc.io/${category.uid}`}
        shareTitle={category.share_title.text}
        shareDescription={category.share_description.text}
        shareImage={`https://steelseries.totominc.io${category.media_share_image.localFile.childImageSharp.original.src}`}
      />

      <div className="px-8 py-4">
        <h1 className="max-w-screen-2xl 2xl:mx-auto 2xl:px-2 mb-4 font-replica-pro font-black text-black text-4xl">
          {category.name.text}
        </h1>

        <div
          className="max-w-4xl mb-4 text-base text-black"
          dangerouslySetInnerHTML={{ __html: category.description.html }}
        />
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
