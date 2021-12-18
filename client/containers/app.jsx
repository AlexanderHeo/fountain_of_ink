import React, { Component } from 'react';
import Layout from '../components/ui/layout';
import Main from '../components/ui/main';
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
        <Scroll />
      </Layout>
    );
  }
}

export default App;
