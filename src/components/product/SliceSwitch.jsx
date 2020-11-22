import React from 'react';

import { ImagesColumn } from './ImagesColumn';
import { LargeImage } from './LargeImage';

const SliceSwitch = ({ slices }) =>
  slices.map((slice) => {
    switch (slice.__typename) {
      case 'PrismicProductBodyImagesColumn':
        return <ImagesColumn key={slice.id} images={slice.primary} />;

      case 'PrismicProductBodyLargeImage':
        return <LargeImage key={slice.id} image={slice.primary} />;

      default:
        return null;
    }
  });

export { SliceSwitch };
