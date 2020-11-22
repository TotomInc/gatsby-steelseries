import React from 'react';

const LargeImage = ({ image }) => (
  <section className="flex mb-4">
    <div className="w-full bg-gray-200 rounded-sm border-2 border-transparent hover:border-black">
      <img
        className="block object-contain rounded-sm"
        src={image.large_image.localFile.childImageSharp.original.src}
        alt=""
      />
    </div>
  </section>
);

export { LargeImage };
