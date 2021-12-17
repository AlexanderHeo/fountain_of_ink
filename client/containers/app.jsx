import React, { Component } from 'react';
import {
  BsChevronDown,
  BsChevronLeft,
  BsChevronRight,
  BsChevronUp,
} from 'react-icons/bs';
import Layout from '../components/ui/layout';

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
        <div className='main flex'>
          <div className='category-container'>
            <div className='category-select'>
              <div className='categories flex'>
                <div
                  className='category-title flex'
                  onClick={this.handleCategory}
                >
                  <h3>Category</h3>
                  {this.state.menudown ? (
                    <BsChevronUp className='chevron' />
                  ) : (
                    <BsChevronDown className='chevron' />
                  )}
                </div>
                {this.state.menudown ? (
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
      </Layout>
    );
  }
}

export default App;
