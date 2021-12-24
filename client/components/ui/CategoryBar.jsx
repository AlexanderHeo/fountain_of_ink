import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const CategoryBar = ({ isVisible }) => {
  const prevVisibility = useRef();

  const [categoryBar, setCategoryBar] = useState('category-bar flex hide');

  useEffect(() => {
    prevVisibility.current = categoryBar;
    if (isVisible !== prevVisibility.isVisible) {
      isVisible
        ? setCategoryBar('category-bar flex show')
        : setCategoryBar('category-bar flex hide');
    }
  });

  return (
    <div className={categoryBar}>
      <div className='category-bar-item'>
        <Link to='/brands'>
          <div className='category-bar-title'>Shop by Brand</div>
        </Link>
      </div>
      <div className='category-bar-item'>
        <Link to='/pens'>
          <div className='category-bar-title'>Fountain Pens</div>
        </Link>
      </div>
      <div className='category-bar-item'>
        <Link to='/inks'>
          <div className='category-bar-title'>Inks</div>
        </Link>
      </div>
      <div className='category-bar-item'>
        <Link to='/papers'>
          <div className='category-bar-title'>Papers</div>
        </Link>
      </div>
      <div className='category-bar-item'>
        <Link to='/accessories'>
          <div className='category-bar-title'>Accessories</div>
        </Link>
      </div>
      <div className='category-bar-item'>
        <Link to='/specials'>
          <div className='category-bar-title'>Specials</div>
        </Link>
      </div>
    </div>
  );
};

export default CategoryBar;
