import React from 'react';

const LargeImage = ({ image, setIsCarouselActive }) => (
  <section className="flex mb-4">
    <div
      className="w-full bg-gray-200 rounded-sm border-2 border-transparent hover:border-black"
      onClick={() => setIsCarouselActive(true)}
      onKeyUp={() => null}
      role="button"
      tabIndex="0"
    >
      <img
        className="block object-contain rounded-sm"
        src={image.large_image.localFile.childImageSharp.original.src}
        alt=""
      />
    </div>
  </section>
);

export { LargeImage };
