import React from 'react';

import { ImagesColumn } from './ImagesColumn';
import { LargeImage } from './LargeImage';

const SliceSwitch = ({ slices, setIsCarouselActive }) =>
  slices.map((slice) => {
    switch (slice.__typename) {
      case 'PrismicProductBodyImagesColumn':
        return <ImagesColumn key={slice.id} images={slice.primary} setIsCarouselActive={setIsCarouselActive} />;

      case 'PrismicProductBodyLargeImage':
        return <LargeImage key={slice.id} image={slice.primary} setIsCarouselActive={setIsCarouselActive} />;

      default:
        return null;
    }
  });

export { SliceSwitch };
