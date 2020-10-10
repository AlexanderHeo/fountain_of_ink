import React, { Component } from 'react';
import ProductListItem from './product-list-item';

class ProductList extends Component {
state = {
  accessories: [],
  pens: [],
  inks: []
};

componentDidMount() {
  fetch('/api/products')
    .then(res => res.json())
    .then(data => {
      const accessory = [];
      const pen = [];
      const ink = [];
      data.map(x => {
        if (x.category === 'accessories') {
          accessory.push(x);
        } else if (x.category === 'pen') {
          pen.push(x);
        } else if (x.category === 'ink') {
          ink.push(x);
        }
      });
      this.setState({
        accessories: accessory,
        pens: pen,
        inks: ink
      });
    });
}

render() {
  let products = '';
  if (this.props.category === 'accessories') {
    products = this.state.accessories;
  } else if (this.props.category === 'pen') {
    products = this.state.pens;
  } else if (this.props.category === 'ink') {
    products = this.state.inks;
  }

  if (products.length === 0) {
    return (
      <div className="d-flex no-details">
        <div className="no-details-message">Loading</div>
      </div>
    );
  }
  return (
    <div className="row">
      <div className="product-main d-flex">
        {
          products.map(x => {
            return (
              <ProductListItem
                product={x}
                key={x.productId}
                view={this.props.onClick}
              />
            );
          })
        }
      </div>
    </div>
  );
}
}

export default ProductList;
