import React, { useEffect } from 'react';
import { ac, df, gk, ln, op, qs, tz } from '../lib/brands-list';
import BrandsList from './BrandsList';
const Brands = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);

  return (
    <div className='brands-container' id='brands'>
      <div className='brands-title'>
        <h3>Shop by Brands</h3>
      </div>
      <div className='brands-list-container grid'>
        <div className='brands-list'>
          <BrandsList title='A - C' list={ac} />
        </div>
        <div className='brands-list'>
          <BrandsList title='D - F' list={df} />
        </div>
        <div className='brands-list'>
          <BrandsList title='G - K' list={gk} />
        </div>
        <div className='brands-list'>
          <BrandsList title='L - N' list={ln} />
        </div>
        <div className='brands-list'>
          <BrandsList title='O - P' list={op} />
        </div>
        <div className='brands-list'>
          <BrandsList title='Q - S' list={qs} />
        </div>
        <div className='brands-list'>
          <BrandsList title='T - Z' list={tz} />
        </div>
      </div>
    </div>
  );
};

export default Brands;
