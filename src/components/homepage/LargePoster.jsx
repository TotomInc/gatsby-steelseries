import React from 'react';

const LargePoster = ({ slice }) => {
  const bgTop = slice.background_image_vertical_position === 'top' ? 'bg-top' : null;
  const bgCenter = slice.background_image_vertical_position === 'center' ? 'bg-center' : null;
  const bgBottom = slice.background_image_vertical_position === 'bottom' ? 'bg-bottom' : null;
  const bgAlign = bgTop || bgCenter || bgBottom;

  return (
    <a
      href={slice.link.text}
      target="_blank"
      rel="noreferrer"
      className={`relative block h-128 p-4 mb-4 bg-cover ${bgAlign || ''}`}
      style={{ backgroundImage: `url(${slice.background_image.localFile.childImageSharp.original.src})` }}
    >
      <div
        className="overlay absolute top-0 bottom-0 left-0 right-0 pointer-events-none"
        style={{ background: 'linear-gradient(270deg,transparent 50%,rgba(0,0,0,.5))' }}
      />

      <h3 className="relative font-replica-pro text-5xl text-white uppercase font-black">{slice.title.text}</h3>

      <p className="relative mb-4 font-semibold text-2xl text-white">{slice.subtitle.text}</p>

      <p className="relative text-2xl font-bold text-white">{slice.cta.text} &gt;</p>
    </a>
  );
};

export { LargePoster };
