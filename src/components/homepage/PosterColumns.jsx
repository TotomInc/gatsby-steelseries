import React from 'react';

import { LargePoster } from './LargePoster';

const PosterColumns = ({ slice }) => {
  const leftSlice = Object.entries(slice)
    .filter(([key]) => key.startsWith('left_'))
    .reduce((acc, [key, value]) => {
      acc[key.substr('left_'.length)] = value;

      return acc;
    }, {});

  const rightSlice = Object.entries(slice)
    .filter(([key]) => key.startsWith('right_'))
    .reduce((acc, [key, value]) => {
      acc[key.substr('right_'.length)] = value;

      return acc;
    }, {});

  return (
    <div className="flex flex-col md:flex-row">
      <div className="md:pr-2 w-full md:w-1/2">
        <LargePoster slice={leftSlice} />
      </div>

      <div className="md:pl-2 w-full md:w-1/2">
        <LargePoster slice={rightSlice} />
      </div>
    </div>
  );
};

export { PosterColumns };
