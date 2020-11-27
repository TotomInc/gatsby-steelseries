import React, { useEffect, useState } from 'react';

import { Close } from '../../icons/Close';
import { ChevronLeft } from '../../icons/ChevronLeft';
import { ChevronRight } from '../../icons/ChevronRight';
import styles from './LargeImagesCarousel.module.css';

const LargeImagesCarousel = ({ images, isCarouselActive, setIsCarouselActive, currentCarouselImage }) => {
  const [imageIndex, setImageIndex] = useState(0);

  const changeImage = (direction) => {
    if (direction === 'right') {
      setImageIndex(imageIndex + 1 > images.length - 1 ? 0 : imageIndex + 1);
    } else if (direction === 'left') {
      setImageIndex(imageIndex === 0 ? images.length - 1 : imageIndex - 1);
    }
  };

  useEffect(() => {
    const index = images.findIndex((image) => image === currentCarouselImage);

    if (index > -1) {
      setImageIndex(index);
    }
  }, [images, currentCarouselImage]);

  return (
    <div className={`${styles.container} ${isCarouselActive ? styles.activeContainer : ''}`}>
      <div className={styles.innerContainer}>
        <div
          className={`${styles.closeIcon}`}
          onClick={() => setIsCarouselActive(false)}
          onKeyDown={() => null}
          role="button"
          tabIndex="0"
        >
          <Close />
        </div>

        <div
          className={`${styles.controlIcon} ${styles.controlIconLeft}`}
          onClick={() => changeImage('left')}
          onKeyDown={() => null}
          role="button"
          tabIndex="0"
        >
          <ChevronLeft />
        </div>

        <div>
          {images.map((image, i) => (
            <div key={image} className={`${styles.imageContainer} ${i === imageIndex ? styles.activeImage : ''}`}>
              <img src={image} alt="" />
            </div>
          ))}
        </div>

        <div
          className={`${styles.controlIcon} ${styles.controlIconRight}`}
          onClick={() => changeImage('right')}
          onKeyDown={() => null}
          role="button"
          tabIndex="0"
        >
          <ChevronRight />
        </div>
      </div>
    </div>
  );
};

export { LargeImagesCarousel };
