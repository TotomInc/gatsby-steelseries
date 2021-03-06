import React from 'react';

const LargeImage = ({ image, setIsCarouselActive, setCurrentCarouselImage }) => (
  <section className="flex mb-4">
    <div
      className="w-full rounded-sm border-2 border-transparent hover:border-black"
      onClick={() => {
        setIsCarouselActive(true);
        setCurrentCarouselImage(image.large_image.localFile.childImageSharp.original.src);
      }}
      onKeyUp={() => null}
      role="button"
      tabIndex="0"
    >
      <img
        className="block object-contain rounded-sm bg-gray-200"
        src={image.large_image.localFile.childImageSharp.original.src}
        alt=""
      />
    </div>
  </section>
);

export { LargeImage };
