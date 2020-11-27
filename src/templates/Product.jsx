import React, { useState } from 'react';
import { graphql } from 'gatsby';

import { CTA } from '../components/product/CTA';
import { SliceSwitch } from '../components/product/SliceSwitch';
import { Specifications } from '../components/product/Specifications/Specifications';
import { LargeImagesCarousel } from '../components/product/LargeImagesCarousel/LargeImagesCarousel';
import { FAQ } from '../components/product/FAQ/FAQ';
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

        faq_title {
          text
        }

        faq {
          faq_title {
            text
          }

          faq_answer {
            html
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

        body1 {
          ... on PrismicProductBody1Specification {
            id

            primary {
              specification_category_name {
                text
              }
            }

            items {
              specification_title {
                text
              }

              specification_description {
                html
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

  const [isCarouselActive, setIsCarouselActive] = useState(false);
  const [carouselImageIndex, setCarouselImageIndex] = useState(0);

  const images = [
    data.image.localFile.childImageSharp.original.src,
    data.body
      .map((item) => {
        if (item.slice_type === 'images_column') {
          return [
            item.primary.image_left.localFile.childImageSharp.original.src,
            item.primary.image_right.localFile.childImageSharp.original.src,
          ];
        }

        if (item.slice_type === 'large_image') {
          return [item.primary.large_image.localFile.childImageSharp.original.src];
        }

        return [];
      })
      .flat(),
  ].flat();

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

      <div className="relative">
        <main className="relative p-4 flex flex-col lg:flex-row lg:flex-wrap lg:mx-auto">
          <div
            className="order-1 lg:w-2/3 lg:pr-8 lg:mb-4"
            onClick={() => {
              setIsCarouselActive(true);
              setCarouselImageIndex(0);
            }}
            onKeyDown={() => null}
            role="button"
            tabIndex="0"
          >
            <img src={data.image.localFile.childImageSharp.original.src} alt="" />
          </div>

          <div className="order-2 py-8 lg:w-1/3 lg:p-0 lg:top-8 lg:sticky">
            <h1 className="mb-4 font-replica-pro font-black text-4xl uppercase">{data.title.text}</h1>

            <div dangerouslySetInnerHTML={{ __html: data.description.html }} />

            <h2 className="mt-8 font-semibold text-2xl">{data.price} EUR</h2>

            <CTA className="mt-4" />
          </div>

          <div className="order-3 lg:w-2/3 lg:pr-8">
            <SliceSwitch slices={data.body} setIsCarouselActive={setIsCarouselActive} />
          </div>
        </main>

        <div className="relative p-4">
          <Specifications specifications={data.body1} />
        </div>

        <div className="relative px-4 py-8 bg-gray-200">
          <FAQ faq={{ title: data.faq_title, faq: data.faq }} />
        </div>

        <LargeImagesCarousel
          images={images}
          isCarouselActive={isCarouselActive}
          setIsCarouselActive={setIsCarouselActive}
          carouselImageIndex={carouselImageIndex}
          setCarouselImageIndex={setCarouselImageIndex}
        />
      </div>
    </>
  );
};

export default Product;
