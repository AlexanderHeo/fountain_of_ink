import React from 'react';
import {
  BsChevronDown,
  BsChevronLeft,
  BsChevronRight,
  BsChevronUp,
} from 'react-icons/bs';

const Main = ({ handleCategory, menudown }) => {
  return (
    <div className='main flex'>
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
                <div className='category'>Fountain Pens</div>
                <div className='category'>Inks</div>
                <div className='category'>Papers</div>
                <div className='category'>Accessories</div>
              </div>
            ) : null}
          </div>
        </div>
        <div className='category-image'>
          <img
            src='images/poster.jpg'
            alt='fountain pen image'
            className='poster'
          />
          <img
            src='images/notebook.jpg'
            alt='noteboook image'
            className='notebook'
          />
        </div>
      </div>
      <div className='side-bar'>
        <div className='featured-section'>
          <div className='featured-title'>
            <h3>Featured Pens</h3>
          </div>
          <div className='featured-image-container'>
            <BsChevronLeft className='chevron-image left' size='2rem' />
            <img src='images/pilot-vp.jpg' alt='notebook' />
            <BsChevronRight className='chevron-image right' size='2rem' />
          </div>
        </div>
        <div className='featured-section'>
          <div className='featured-title'>
            <h3>Featured Inks</h3>
          </div>
          <div className='featured-image-container'>
            <BsChevronLeft className='chevron-image left' size='2rem' />
            <img src='images/montverde-burgundy.jpg' alt='notebook' />
            <BsChevronRight className='chevron-image right' size='2rem' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
