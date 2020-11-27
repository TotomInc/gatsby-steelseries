import React from 'react';

import { ImagesColumn } from './ImagesColumn';
import { LargeImage } from './LargeImage';

const SliceSwitch = ({ slices, setIsCarouselActive, setCurrentCarouselImage }) =>
  slices.map((slice) => {
    switch (slice.__typename) {
      case 'PrismicProductBodyImagesColumn':
        return (
          <ImagesColumn
            key={slice.id}
            images={slice.primary}
            setIsCarouselActive={setIsCarouselActive}
            setCurrentCarouselImage={setCurrentCarouselImage}
          />
        );

      case 'PrismicProductBodyLargeImage':
        return (
          <LargeImage
            key={slice.id}
            image={slice.primary}
            setIsCarouselActive={setIsCarouselActive}
            setCurrentCarouselImage={setCurrentCarouselImage}
          />
        );

      default:
        return null;
    }
  });

export { SliceSwitch };
