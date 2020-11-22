import React from 'react';
import { graphql } from 'gatsby';

import { CTA } from '../components/product/CTA';
import { SliceSwitch } from '../components/product/SliceSwitch';
import { SEO } from '../components/SEO';

export const query = graphql`
  query ProductBySlug($uid: String!) {
    prismicProduct(uid: { eq: $uid }) {
      uid

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
  const { uid, data } = prismicProduct;

  return (
    <>
      <SEO
        pageTitle={data.page_title.text}
        pageDescription={data.page_description.text}
        pageUrl={`https://steelseries.totominc.io/${uid}`}
        shareTitle={data.share_title.text}
        shareDescription={data.share_description.text}
        shareImage={`https://steelseries.totominc.io${data.media_share_image.localFile.childImageSharp.original.src}`}
      />

      <main className="relative p-8 flex flex-col lg:flex-row lg:flex-wrap lg:mx-auto">
        <div className="order-1 lg:w-2/3 lg:pr-8 lg:mb-4">
          <img src={data.image.localFile.childImageSharp.original.src} alt="" />
        </div>

        <div className="order-2 py-8 lg:w-1/3 lg:p-0 lg:top-8 lg:sticky">
          <h1 className="mb-4 font-replica-pro font-black text-4xl uppercase">{data.title.text}</h1>

          <div dangerouslySetInnerHTML={{ __html: data.description.html }} />

          <h2 className="mt-8 font-semibold text-2xl">{data.price} EUR</h2>

          <CTA className="mt-4" />
        </div>

        <div className="order-3 lg:w-2/3 lg:pr-8">
          <SliceSwitch slices={data.body} />
        </div>
      </main>
    </>
  );
};

export default Product;
