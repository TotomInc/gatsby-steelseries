import React from 'react';

const CTA = ({ className }) => (
  <button
    className={`w-full px-8 py-4 rounded-sm text-white font-bold text-xl bg-steelseries-orange ${className}`}
    type="button"
  >
    Add to cart
  </button>
);

export { CTA };
