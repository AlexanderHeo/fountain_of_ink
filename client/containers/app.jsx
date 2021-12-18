import React, { Component } from 'react';
import {
  accessories,
  inks,
  papers,
  pens,
} from '../components/lib/mainCategory';
import Brands from '../components/ui/brands';
import Layout from '../components/ui/layout';
import Main from '../components/ui/main';
import MainCategory from '../components/ui/main-category';
import Scroll from './scroll-to-top';

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
      <Layout home isVisible={isVisible}>
        <Main
          handleCategory={this.handleCategory}
          menudown={this.state.menudown}
        />
        <div className='main-category-container'>
          <MainCategory title='pens' categories={pens} />
          <MainCategory title='inks' categories={inks} />
          <MainCategory title='papers' categories={papers} />
          <MainCategory title='accessories' categories={accessories} />
          <Brands />
        </div>
        <Scroll />
      </Layout>
    );
  }
}

export default App;
