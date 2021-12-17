import React from 'react';
import Footer from './footer';
import Header from './header';

const Layout = ({ children, home }) => {
  return (
    <>
      {home ? <Header cartNumber='3' home /> : <Header cartNumber='3' />}
      {children}
      <Footer />
    </>
  );
};

export default Layout;
