import React, { useState } from 'react';

import { Close } from '../../icons/Close';
import { ChevronLeft } from '../../icons/ChevronLeft';
import { ChevronRight } from '../../icons/ChevronRight';
import styles from './LargeImagesCarousel.module.css';

const LargeImagesCarousel = ({
  images,
  isCarouselActive,
  setIsCarouselActive,
  carouselImageIndex,
  setCarouselImageIndex,
}) => {
  const changeImage = (direction) => {
    if (direction === 'right') {
      setCarouselImageIndex(carouselImageIndex + 1 > images.length - 1 ? 0 : carouselImageIndex + 1);
    } else if (direction === 'left') {
      setCarouselImageIndex(carouselImageIndex === 0 ? images.length - 1 : carouselImageIndex - 1);
    }
  };

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
            <div
              key={image}
              className={`${styles.imageContainer} ${i === carouselImageIndex ? styles.activeImage : ''}`}
            >
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
