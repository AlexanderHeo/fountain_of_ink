import React, { Component } from 'react';
import { connect } from 'react-redux';
import Spinner from '../../components/navigation/spinner';
import ProductListItem from '../../components/products/product-list-item';

class ProductList extends Component {
  render() {
    let productList = <Spinner />;
    let products = [];
    if (!this.props.loading) {
      if (this.props.category === 'accessories') {
        products = this.props.accessories;
      } else if (this.props.category === 'pen') {
        products = this.props.pens;
      } else if (this.props.category === 'ink') {
        products = this.props.inks;
      }
      productList = products.map(x => {
        return (
          <ProductListItem
            product={x}
            key={x.productId}
            view={this.props.onClick}
          />
        );
      });
    }
    return (
      <div className="row">
        <div className="product-main d-flex">
          {productList}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    category: state.viewReducer.category,
    accessories: state.productReducer.accessories,
    pens: state.productReducer.pens,
    inks: state.productReducer.inks,
    loading: state.productReducer.loading
  };
};

export default connect(mapStateToProps)(ProductList);
