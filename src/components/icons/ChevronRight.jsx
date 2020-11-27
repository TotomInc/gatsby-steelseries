import React from 'react';

const ChevronRight = ({ strokeWidth = 2 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} d="M9 5l7 7-7 7" />
  </svg>
);

export { ChevronRight };
