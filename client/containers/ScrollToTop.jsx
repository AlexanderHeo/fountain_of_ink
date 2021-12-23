import React, { Component } from 'react';
import { BsArrowUpSquare } from 'react-icons/bs';

class ScrollToTop extends Component {
  state = {
    isVisible: false,
  };

  componentDidMount = () => {
    this.scrollToTop();
    const scroll = this;
    document.addEventListener('scroll', () => {
      scroll.toggleVisibility();
    });
  };

  toggleVisibility = () => {
    if (window.pageYOffset > 350) {
      this.setState({ isVisible: true });
    } else {
      this.setState({ isVisible: false });
    }
  };

  scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  render() {
    const { isVisible } = this.state;
    return (
      <>
        {isVisible && (
          <BsArrowUpSquare
            className='scroll-to-top'
            onClick={this.scrollToTop}
            size='3rem'
          />
        )}
      </>
    );
  }
}

export default ScrollToTop;
