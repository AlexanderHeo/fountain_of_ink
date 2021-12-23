import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { accessories, inks, papers, pens } from '../lib/category-list';
import { inkColors, penColors } from '../lib/colors-list';
import Brands from './Brands';
import Category from './Category';
import Colors from './Colors';

const Product = () => {
  const params = useParams();
  const productType = params.productType;
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, [productType]);

  let categories;

  switch (productType) {
    case 'pens':
      categories = pens;
      break;
    case 'inks':
      categories = inks;
      break;
    case 'papers':
      categories = papers;
      break;
    case 'accessories':
      categories = accessories;
      break;
  }
  let colorElement;
  if (categories.title === 'pens') {
    colorElement = (
      <div className='product-hero-color-section'>
        <Colors colors={penColors} categorys='pens' />
      </div>
    );
  } else if (categories.title === 'inks') {
    colorElement = (
      <div className='product-hero-color-section'>
        <Colors colors={inkColors} categorys='pens' />
      </div>
    );
  } else {
    colorElement = null;
  }
  return (
    <div className='product-container'>
      <div className='product-hero-section flex'>
        <div className='product-hero-image-section flex'>
          <div className='product-hero-image-container flex'>
            <img src={categories.img} alt={categories.alt} />
          </div>
        </div>
        <div className='product-hero-subcategory-section'>
          <Category categories={categories} />
        </div>
      </div>
      {colorElement}
      <Brands />
    </div>
  );
};

export default Product;
