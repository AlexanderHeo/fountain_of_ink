import React from 'react';
import { BsCart3 } from 'react-icons/bs';
import { FiHeart, FiSearch } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import CategoryBar from './CategoryBar';

const Header = ({ cartNumber, home, isVisible }) => {
  return (
    <div id='header' className='flex'>
      <div className='header flex'>
        <div className='logo-container flex'>
          <div className='logo-image flex'>
            {home ? (
              <img src='/images/fountain-pen.png' alt='fountain pen nib logo' />
            ) : (
              <Link to='/' className='logo logo-link'>
                <img
                  src='/images/fountain-pen.png'
                  alt='fountain pen nib logo'
                />
              </Link>
            )}
          </div>
          <p className='logo-title'>Fountain of Ink</p>
        </div>
        <div className='header-links-container flex'>
          <div className='header-link search'>
            <input type='text' className='search-input' />
            <a href='#' className='link'>
              <FiSearch className='search-icon' size='1.5rem' />
            </a>
          </div>
          <div className='header-link favs'>
            <a href='#' className='link'>
              <FiHeart size='1.5rem' />
            </a>
          </div>
          <div className='header-link cart flex'>
            <a href='#' className='link flex'>
              <BsCart3 size='1.5rem' />
              <div className='cart-number flex'>
                <span>{cartNumber}</span>
              </div>
            </a>
          </div>
        </div>
      </div>
      <CategoryBar className='category-bar' isVisible={isVisible} />
    </div>
  );
};

export default Header;
