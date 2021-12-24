import React from 'react';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';
import Carousel from '../../containers/Carousel';
import { featuredInks, featuredPens } from '../lib/carousel-list';
import { accessories, inks, papers, pens } from '../lib/category-list';
import Brands from './Brands';
import Category from './Category';

const Main = ({ handleCategory, menudown }) => {
  return (
    <div className='main'>
      <div className='main-container flex'>
        <div className='category-container'>
          <div className='category-select'>
            <div className='categories flex'>
              <div className='category-title flex' onClick={handleCategory}>
                <h3>Category</h3>
                {menudown ? (
                  <BsChevronUp className='chevron' />
                ) : (
                  <BsChevronDown className='chevron' />
                )}
              </div>
              {menudown ? (
                <div className='category-list'>
                  <NavLink to='/pens'>
                    <div className='category'>Fountain Pens</div>
                  </NavLink>
                  <NavLink to='/inks'>
                    <div className='category'>Inks</div>
                  </NavLink>
                  <NavLink to='/papers'>
                    <div className='category'>Papers</div>
                  </NavLink>
                  <NavLink to='/accessories'>
                    <div className='category'>Accessories</div>
                  </NavLink>
                  <NavLink to='/brands'>
                    <div className='category'>Shop by Brands</div>
                  </NavLink>
                </div>
              ) : null}
            </div>
          </div>
          <div className='category-image'>
            <img
              src='images/poster.jpg'
              alt='fountain pen poster'
              className='poster'
            />
            <img
              src='images/ink-wreath.jpg'
              alt='a wreath of ink swatches'
              className='notebook'
            />
          </div>
        </div>
        <div className='side-bar'>
          <div className='featured-section'>
            <div className='featured-title'>
              <h3>Featured Pens</h3>
            </div>
            <Carousel images={featuredPens} />
          </div>
          <div className='featured-section'>
            <div className='featured-title'>
              <h3>Featured Inks</h3>
            </div>
            <Carousel images={featuredInks} />
            {/* <div className='featured-image-container'>
              <BsChevronLeft className='chevron-image left' size='2rem' />
              <img src='images/montverde-burgundy.jpg' alt='notebook' />
              <BsChevronRight className='chevron-image right' size='2rem' />
            </div> */}
          </div>
        </div>
      </div>
      <div className='main-category-container'>
        <Category categories={pens} />
        <Category categories={inks} />
        <Category categories={papers} />
        <Category categories={accessories} />
        <Brands />
      </div>
    </div>
  );
};

export default Main;
