import React from 'react';
import Footer from './Footer';
import Header from './Header';

const Layout = ({ children, home, isVisible }) => {
  return (
    <>
      {home ? (
        <Header cartNumber='3' home isVisible={isVisible} />
      ) : (
        <Header cartNumber='3' isVisible={isVisible} />
      )}
      {children}
      <Footer />
    </>
  );
};

export default Layout;
