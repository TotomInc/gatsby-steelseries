import React from 'react';
import { graphql } from 'gatsby';

import { CTA } from '../components/product/CTA';
import { SliceSwitch } from '../components/product/SliceSwitch';

export const query = graphql`
  query ProductBySlug($uid: String!) {
    prismicProduct(uid: { eq: $uid }) {
      data {
        price
        member_price
        member_discount

        title {
          text
        }

        description {
          html
        }

        image {
          localFile {
            childImageSharp {
              original {
                src
              }
            }
          }
        }

        body {
          ... on PrismicProductBodyLargeImage {
            id
            slice_type

            primary {
              large_image {
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

          ... on PrismicProductBodyImagesColumn {
            id
            slice_type

            primary {
              image_left {
                localFile {
                  childImageSharp {
                    original {
                      src
                    }
                  }
                }
              }

              image_right {
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
        }
      }
    }
  }
`;

const Product = ({ data: { prismicProduct } }) => {
  const { data } = prismicProduct;

  return (
    <main className="p-4 flex flex-col">
      <div className="order-1">
        <img src={data.image.localFile.childImageSharp.original.src} alt="" />
      </div>

      <div className="order-2 py-8">
        <h1 className="mb-4 font-replica-pro font-black text-4xl uppercase">{data.title.text}</h1>

        <div dangerouslySetInnerHTML={{ __html: data.description.html }} />

        <h2 className="mt-8 font-semibold text-2xl">{data.price} EUR</h2>

        <CTA className="mt-4" />
      </div>

      <div className="order-3">
        <SliceSwitch slices={data.body} />
      </div>
    </main>
  );
};

export default Product;
