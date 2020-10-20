import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddedToCart from '../../components/cart/added-to-cart';
import BackToCart from '../../components/navigation/back-to-cart';
import BackToCatalog from '../../components/navigation/back-to-catalog';
import ProductDetail from '../../components/products/product-detail';
import * as productDetailActionCreator from '../../store/actions/productDetailActionCreator';

class ProductDetails extends Component {
state = {
  product: '',
  addedToCart: false
};

componentDidMount() {
  this.props.onProductDetailFetch(this.props.productId);
  // const productId = this.props.productId;
  // fetch(`/api/products/${productId}`)
  //   .then(res => res.json())
  //   .then(data => this.setState({ product: data }));
}

  handleAddedToCart = () => {
    this.props.onHandleAddedToCart();
    // this.setState({ addedToCart: true });
  }

  render() {
    if (!this.props.addedToCart) {
      let toCart = '';
      if (!this.props.fromCart) {
        toCart = null;
      } else if (this.props.fromCart) {
        toCart = <BackToCart onClick={() => this.props.onClick('cart', {}, false)} />;
      }
      return (
        !this.props.product
          ? <>
            <BackToCatalog onClick={() => this.props.onClick('catalog', {}, false)} />
            <NoDetails />
          </>
          : <>
            <BackToCatalog onClick={() => this.props.onClick('catalog', {}, false)} />
            {toCart}
            <ProductDetail
              product={this.props.product}
              onClick={this.props.onClick}
              addToCart={this.props.addToCart}
              handleAddedToCart={this.handleAddedToCart}
            />
          </>
      );
    } else {
      return <AddedToCart
        product={this.props.product}
        onClick={this.props.onClick}
      />;
    }
  }
}

function NoDetails() {
  return (
    <div className="d-flex no-details">
      <div className="no-details-message">The product you chose does not seem to exist in this place of existence. Please return to previous page and reassess the decisions you have made.</div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    product: state.productDetailReducer.product,
    addedToCart: state.productDetailReducer.addedToCart,
    loading: state.productDetailReducer.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onProductDetailFetch: productId => dispatch(productDetailActionCreator.productDetailFetch(productId)),
    onHandleAddedToCart: () => dispatch(productDetailActionCreator.handleAddedToCart())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);
