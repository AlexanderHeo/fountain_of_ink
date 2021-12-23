import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Brands from '../components/ui/Brands';
import Layout from '../components/ui/Layout';
import Main from '../components/ui/Main';
import Product from '../components/ui/product';
import Scroll from './ScrollToTop';

class App extends Component {
  state = {
    menudown: false,
    isVisible: false,
  };

  componentDidMount = () => {
    const scroll = this;
    document.addEventListener('scroll', () => {
      scroll.toggleVisibility();
    });
  };

  toggleVisibility = () => {
    if (window.pageYOffset > 700) {
      this.setState({ isVisible: true });
    } else {
      this.setState({ isVisible: false });
    }
  };

  handleCategory = () => {
    const menudown = this.state.menudown;
    if (menudown) {
      this.setState({ menudown: false });
    } else {
      this.setState({ menudown: true });
    }
  };

  render() {
    const isVisible = this.state.isVisible;
    return (
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={
              <Layout home isVisible={isVisible}>
                <Main
                  handleCategory={this.handleCategory}
                  menudown={this.state.menudown}
                />
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
  }
}

export default App;
