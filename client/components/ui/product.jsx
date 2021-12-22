import React from 'react';
import { inkColors, penColors } from '../lib/colors';
import { accessories, inks, papers, pens } from '../lib/mainCategory';
import Brands from './brands';
import Colors from './colors';
import Category from './main-category';

const Product = () => {
  const cn2 = `product-hero-subcategory-section ${accessories.title}`;
  return (
    <div className='product-container'>
      <div className='product-hero-section flex'>
        <div className='product-hero-image-section flex'>
          <div className='product-hero-image-container flex'>
            <img src={pens.img} alt={pens.alt} />
          </div>
        </div>
        <div className='product-hero-subcategory-section'>
          <Category categories={pens} />
        </div>
      </div>
      <div className='product-hero-color-section'>
        <Colors colors={penColors} category='inks' />
      </div>
      <div className='product-hero-section flex'>
        <div className='product-hero-image-section flex'>
          <div className='product-hero-image-container flex'>
            <img src={inks.img} alt={inks.alt} />
          </div>
        </div>
        <div className='product-hero-subcategory-section'>
          <Category categories={inks} />
        </div>
      </div>
      <div className='product-hero-color-section'>
        <Colors colors={inkColors} category='inks' />
      </div>
      <div className='product-hero-section flex'>
        <div className='product-hero-image-section flex'>
          <div className='product-hero-image-container flex'>
            <img src={papers.img} alt={papers.alt} />
          </div>
        </div>
        <div className='product-hero-subcategory-section'>
          <Category categories={papers} />
        </div>
      </div>
      <div className='product-hero-section flex'>
        <div className='product-hero-image-section flex'>
          <div className='product-hero-image-container flex'>
            <img src={accessories.img} alt={accessories.alt} />
          </div>
        </div>
        <div className={cn2}>
          <Category categories={accessories} />
        </div>
      </div>
      <Brands />
    </div>
  );
};

export default Product;
