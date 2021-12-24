import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Brands from '../components/ui/Brands';
import Layout from '../components/ui/Layout';
import Main from '../components/ui/Main';
import Product from '../components/ui/product';
import Scroll from './ScrollToTop';

const App = () => {
  const [menudown, setMenudown] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    document.addEventListener('scroll', () => {
      toggleVisibility();
    });
  });

  const toggleVisibility = () => {
    if (window.pageYOffset > 700) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const handleCategory = () => {
    if (menudown) {
      setMenudown(false);
    } else {
      setMenudown(true);
    }
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
            <Layout home isVisible={isVisible}>
              <Main handleCategory={handleCategory} menudown={menudown} />
            </Layout>
          }
        />
        <Route
          path=':productType'
          element={
            <Layout isVisible>
              <Product />
            </Layout>
          }
        />
        <Route
          path='/brands'
          element={
            <Layout isVisible>
              <Brands />
            </Layout>
          }
        />
      </Routes>
      <Scroll />
    </BrowserRouter>
  );
};

export default App;
