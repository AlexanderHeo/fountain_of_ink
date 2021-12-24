import React, { useEffect, useState } from 'react';
import { BsArrowUpSquare } from 'react-icons/bs';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    document.addEventListener('scroll', () => {
      toggleVisibility();
    });
  }, []);

  const toggleVisibility = () => {
    if (window.pageYOffset > 350) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isVisible && (
        <BsArrowUpSquare
          className='scroll-to-top'
          onClick={scrollToTop}
          size='3rem'
        />
      )}
    </>
  );
};

export default ScrollToTop;
