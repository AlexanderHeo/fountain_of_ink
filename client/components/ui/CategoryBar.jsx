import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
          <Link to='/brands'>
            <div className='category-bar-title'>Shop by Brand</div>
          </Link>
        </div>
        <div className='category-bar-item'>
          <Link to='/pens'>
            <div className='category-bar-title'>Fountain Pens</div>
          </Link>
        </div>
        <div className='category-bar-item'>
          <Link to='/inks'>
            <div className='category-bar-title'>Inks</div>
          </Link>
        </div>
        <div className='category-bar-item'>
          <Link to='/papers'>
            <div className='category-bar-title'>Papers</div>
          </Link>
        </div>
        <div className='category-bar-item'>
          <Link to='/accessories'>
            <div className='category-bar-title'>Accessories</div>
          </Link>
        </div>
        <div className='category-bar-item'>
          <Link to='/specials'>
            <div className='category-bar-title'>Specials</div>
          </Link>
        </div>
      </div>
    );
  }
}

export default CategoryBar;
