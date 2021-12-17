import React from 'react';
import Footer from './footer';
import Header from './header';

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
