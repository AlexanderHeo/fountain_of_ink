import React, { useEffect, useState } from 'react';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => changeSlide(), 10000);
    return () => clearInterval(interval);
  }, [images]);

  const changeSlide = () => {
    const lastIndex = images.length - 1;
    setCurrentIndex((currentIndex) => {
      return currentIndex === lastIndex ? 0 : currentIndex + 1;
    });
  };

  const previousIndex = () => {
    const prevIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(prevIndex);
  };

  const nextIndex = () => {
    const nextIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(nextIndex);
  };

  return (
    <div className='featured-image-container'>
      <BsChevronLeft
        className='chevron-image left'
        size='2rem'
        onClick={() => previousIndex()}
      />
      <img src={images[currentIndex].img} alt={images[currentIndex].alt} />
      <BsChevronRight
        className='chevron-image right'
        size='2rem'
        onClick={() => nextIndex()}
      />
      <h4>{images[currentIndex].title}</h4>
    </div>
  );
};

export default Carousel;
