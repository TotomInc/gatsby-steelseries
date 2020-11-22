import React from 'react';

import { LargePoster } from './LargePoster';
import { PosterColumns } from './PosterColumns';

const HomepageSlicesSwitch = ({ slices }) =>
  slices.map((slice) => {
    switch (slice.__typename) {
      case 'PrismicHomepageBodyLargePoster':
        return <LargePoster slice={slice.primary} key={slice.id} />;

      case 'PrismicHomepageBodyPosterColumns':
        return <PosterColumns slice={slice.primary} key={slice.id} />;

      default:
        return null;
    }
  });

export { HomepageSlicesSwitch };
