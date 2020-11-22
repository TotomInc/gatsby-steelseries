import React from 'react';

const CTA = ({ className }) => (
  <button
    className={`w-full px-8 py-4 rounded-sm text-white font-bold text-xl transition-all ease-in-out duration-150 bg-steelseries-orange hover:bg-opacity-80 ${className}`}
    type="button"
  >
    Add to cart
  </button>
);

export { CTA };
