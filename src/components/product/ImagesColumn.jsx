import React from 'react';

const ImagesColumn = ({ images }) => (
  <section className="flex mb-4">
    <div className="w-1/2 mr-2 bg-gray-200 rounded-sm">
      <img
        className="block object-contain rounded-sm"
        src={images.image_left.localFile.childImageSharp.original.src}
        alt=""
      />
    </div>

    <div className="w-1/2 ml-2 bg-gray-200 rounded-sm">
      <img
        className="block object-contain rounded-sm"
        src={images.image_right.localFile.childImageSharp.original.src}
        alt=""
      />
    </div>
  </section>
);

export { ImagesColumn };
