import React from 'react';
import { Link, graphql } from 'gatsby';

import { HomepageSlicesSwitch } from '../components/homepage/HomepageSlicesSwitch';
import { SEO } from '../components/SEO';

export const query = graphql`
  {
    allPrismicCategory {
      edges {
        node {
          uid

          data {
            name {
              text
            }
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

const IndexPage = ({ data: { allPrismicCategory, prismicHomepage } }) => {
  const categories = allPrismicCategory.edges
    .map((edge) => edge.node)
    .map((node) => ({
      uid: node.uid,
      ...node.data,
    }));

  const homepage = prismicHomepage.data;

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
        <h2 className="mb-8 font-replica-pro font-black text-black text-2xl lg:text-4xl uppercase text-center">
          Shop by category
        </h2>

        <ul className="flex flex-wrap items-center justify-center list-none p-0">
          {categories.map((category) => (
            <li
              key={category.uid}
              className="w-24 md:w-48 mx-8 mb-2 border-2 border-transparent rounded-sm hover:border-black"
            >
              <Link
                to={`/${category.uid}`}
                className="flex flex-col items-center justify-center font-replica-pro font-bold text-xl pb-2"
              >
                <img
                  className="mb-4 rounded-sm object-contain bg-gray-200"
                  src="https://via.placeholder.com/350x300"
                  alt={category.name.text}
                />

                {category.name.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default IndexPage;
