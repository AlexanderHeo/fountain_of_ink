import React from 'react';
import ProductListItem from './product-list-item';

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }

  componentDidMount() {
    fetch('/api/products')
      .then(res => res.json())
      .then(data => this.setState({
        products: data
      }));
  }

  render() {
    const products = this.state.products;
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
