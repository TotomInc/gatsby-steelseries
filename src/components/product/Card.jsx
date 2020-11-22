import React from 'react';
import { Link } from 'gatsby';

const Card = ({ product }) => (
  <div className="p-2 w-full sm:w-1/2 md:w-1/3 xl:w-1/4 border-2 border-transparent hover:border-black rounded-sm">
    <Link to={`/${product.uid}`} className="no-underline text-black">
      <div className="relative w-full flex items-center justify-center h-80 bg-gray-200">
        <img
          className="block object-contain w-full"
          src={product.card_image.localFile.childImageSharp.original.src}
          alt=""
        />

        {product.is_new && (
          <p className="absolute bottom-0 left-0 right-0 flex items-center h-8 px-4 font-semibold text-sm bg-black text-white">
            New product
          </p>
        )}
      </div>

      <div className="p-4">
        <h3 className="mb-2 font-replica-pro font-black text-xl uppercase">{product.title.text}</h3>

        <p className="mb-2 font-semibold text-lg">{product.price} EUR</p>

        <div dangerouslySetInnerHTML={{ __html: product.card_description.html }} />
      </div>
    </Link>
  </div>
);

export { Card };
