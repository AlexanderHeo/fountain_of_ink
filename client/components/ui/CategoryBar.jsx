import React, { Component } from 'react';

class CategoryBar extends Component {
  state = {
    categoryBar: 'category-bar flex hide',
  };

  componentDidUpdate = (prevProps) => {
    const isVisible = this.props.isVisible;
    if (isVisible !== prevProps.isVisible) {
      this.props.isVisible
        ? this.setState({ categoryBar: 'category-bar flex show' })
        : this.setState({ categoryBar: 'category-bar flex hide' });
    }
  };

  render() {
    return (
      <div className={this.state.categoryBar}>
        <div className='category-bar-item'>
          <div className='category-bar-title'>Shop by Brand</div>
        </div>
        <div className='category-bar-item'>
          <div className='category-bar-title'>Fountain Pens</div>
        </div>
        <div className='category-bar-item'>
          <div className='category-bar-title'>Inks</div>
        </div>
        <div className='category-bar-item'>
          <div className='category-bar-title'>Papers</div>
        </div>
        <div className='category-bar-item'>
          <div className='category-bar-title'>Accessories</div>
        </div>
        <div className='category-bar-item'>
          <div className='category-bar-title'>Specials</div>
        </div>
      </div>
    );
  }
}

export default CategoryBar;
