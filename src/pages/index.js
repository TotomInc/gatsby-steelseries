import React from 'react';
import { graphql } from 'gatsby';

import { HomepageSlicesSwitch } from '../components/homepage/HomepageSlicesSwitch';
import { Card } from '../components/product/Card';
import { SEO } from '../components/SEO';

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

    prismicHomepage {
      data {
        body {
          __typename

          ... on PrismicHomepageBodyLargePoster {
            id
            slice_type

            primary {
              title {
                text
              }

              subtitle {
                text
              }

              cta {
                text
              }

              link {
                text
              }

              background_image_vertical_position

              background_image {
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

          ... on PrismicHomepageBodyPosterColumns {
            id
            slice_type

            primary {
              left_title {
                text
              }

              left_subtitle {
                text
              }

              left_cta {
                text
              }

              left_link {
                text
              }

              left_background_image_vertical_position

              left_background_image {
                localFile {
                  childImageSharp {
                    original {
                      src
                    }
                  }
                }
              }

              right_title {
                text
              }

              right_subtitle {
                text
              }

              right_cta {
                text
              }

              right_link {
                text
              }

              right_background_image_vertical_position

              right_background_image {
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

const IndexPage = ({ data: { allPrismicProduct, prismicHomepage } }) => {
  const products = allPrismicProduct.edges
    .map((edge) => edge.node)
    .map((node) => ({
      id: node.id,
      uid: node.uid,
      ...node.data,
    }));

  const homepage = prismicHomepage.data;

  console.log(homepage);

  return (
    <>
      <SEO
        pageTitle="SteelSeries Replica Website | Made with Gatsby &amp; Prismic.io"
        pageDescription="A SteelSeries e-commerce replica website made with Gatsby (React SSR) &amp; Prismic.io (headless CMS) as a learning and educational project."
        pageUrl="https://steelseries.totominc.io/"
        shareTitle="SteelSeries Replica Website | Made with Gatsby &amp; Prismic.io"
        shareDescription="A SteelSeries e-commerce replica website made with Gatsby (React SSR) &amp; Prismic.io (headless CMS) as a learning and educational project."
      />

      <div className="p-4">
        <HomepageSlicesSwitch slices={homepage.body} />
      </div>

      <div className="p-4">
        <h1 className="font-replica-pro font-black text-4xl mb-8">All our products</h1>

        <div className="flex flex-wrap max-w-screen-2xl 2xl:mx-auto">
          {products.map((product) => (
            <Card product={product} key={product.id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default IndexPage;
