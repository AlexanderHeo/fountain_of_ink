import React from 'react';
import { BiSupport } from 'react-icons/bi';
import {
  FaFacebook,
  FaHeart,
  FaInstagram,
  FaPinterest,
  FaTwitter,
} from 'react-icons/fa';
import { MdLocalShipping } from 'react-icons/md';

const Footer = () => {
  return (
    <>
      <div id='footer'>
        <div className='footer-container grid'>
          <div className='footer-column'>
            <h4 className='footer-title'>Guarantees</h4>
            <div className='footer-item flex'>
              <MdLocalShipping className='footer-icon' size='1.5rem' />
              <span className='guarantee-tag flex'>Safe Shipping</span>
            </div>
            <div className='footer-item flex'>
              <BiSupport className='footer-icon' size='1.5rem' />
              <span className='guarantee-tag flex'>Expert Support</span>
            </div>
            <div className='footer-item flex'>
              <FaHeart className='footer-icon' size='1.5rem' />
              <span className='guarantee-tag flex'>We Care</span>
            </div>
          </div>
          <div className='footer-column'>
            <h4 className='footer-title'>About Us</h4>
            <div className='footer-item'>
              <a href='#'>
                <p>Fountain of Ink</p>
              </a>
            </div>
            <div className='footer-item'>
              <a href='#'>
                <p>About Us</p>
              </a>
            </div>
            <div className='footer-item'>
              <a href='#'>
                <p>Mission Statement</p>
              </a>
            </div>
          </div>
          <div className='footer-column'>
            <h4 className='footer-title'>Help & FAQs</h4>
            <div className='footer-item'>
              <a href='#'>
                <p>Shipping Policy</p>
              </a>
            </div>
            <div className='footer-item'>
              <a href='#'>
                <p>Return Policy</p>
              </a>
            </div>
            <div className='footer-item'>
              <a href='#'>
                <p>FAQs</p>
              </a>
            </div>
            <div className='footer-item'>
              <a href='#'>
                <p>Contact US</p>
              </a>
            </div>
          </div>
          <div className='footer-column'>
            <h4 className='footer-title'>Follow Us</h4>
            <div className='sm-container flex'>
              <div className='sm-icon'>
                <a href='#' className='link'>
                  <FaFacebook className='faicon icon' size='2rem' />
                </a>
              </div>
              <div className='sm-icon'>
                <a href='#' className='link'>
                  <FaTwitter className='twicon icon' size='2rem' />
                </a>
              </div>
              <div className='sm-icon'>
                <a href='#' className='link'>
                  <FaInstagram className='igicon icon' size='2rem' />
                </a>
              </div>
              <div className='sm-icon'>
                <a href='#' className='link'>
                  <FaPinterest className='pticon icon' size='2rem' />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='copyright flex'>
        <div> Copyright fountainofink&copy; 2021</div>
        <div>
          developed by <a href='https://alexheo.com'>Alex Heo</a>
        </div>
        <div>
          <a href='https://github.com/AlexanderHeo'>GitHub Repo</a>
        </div>
      </div>
    </>
  );
};

export default Footer;
