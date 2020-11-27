import React from 'react';

const ImagesColumn = ({ images, setIsCarouselActive, setCurrentCarouselImage }) => (
  <section className="flex mb-4">
    <div
      className="w-1/2 mr-2 rounded-sm border-2 border-transparent hover:border-black"
      onClick={() => {
        setIsCarouselActive(true);
        setCurrentCarouselImage(images.image_left.localFile.childImageSharp.original.src);
      }}
      onKeyUp={() => null}
      role="button"
      tabIndex="0"
    >
      <img
        className="block object-contain rounded-sm bg-gray-200"
        src={images.image_left.localFile.childImageSharp.original.src}
        alt=""
      />
    </div>

    <div
      className="w-1/2 ml-2 rounded-sm border-2 border-transparent hover:border-black"
      onClick={() => {
        setIsCarouselActive(true);
        setCurrentCarouselImage(images.image_right.localFile.childImageSharp.original.src);
      }}
      onKeyUp={() => null}
      role="button"
      tabIndex="0"
    >
      <img
        className="block object-contain rounded-sm bg-gray-200"
        src={images.image_right.localFile.childImageSharp.original.src}
        alt=""
      />
    </div>
  </section>
);

export { ImagesColumn };
