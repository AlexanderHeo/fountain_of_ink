import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddedToCart from '../../components/cart/added-to-cart';
import BackToCart from '../../components/navigation/back-to-cart';
import BackToCatalog from '../../components/navigation/back-to-catalog';
import ProductDetail from '../../components/products/product-detail';
import * as cartActionCreator from '../../store/actions/cartActionCreator';
import * as productDetailActionCreator from '../../store/actions/productDetailActionCreator';
import * as viewActionCreator from '../../store/actions/viewActionCreators';

class ProductDetails extends Component {
  componentDidMount() {
    this.props.onProductDetailFetch(this.props.view.params.productId);
  }

  handleAddedToCart = () => {
    this.props.onHandleAddedToCart();
  }

  render() {
    if (!this.props.addedToCart) {
      let toCart = null;
      if (!this.props.view.fromCart) {
        toCart = null;
      } else if (this.props.view.fromCart) {
        toCart = <BackToCart onClick={() => this.props.onSetView('cart', {}, false)} />;
      }
      return (
        !this.props.product
          ? <>
            <BackToCatalog onClick={() => this.props.onSetView('catalog', {}, false)} />
            <NoDetails />
          </>
          : <>
            <BackToCatalog onClick={() => this.props.onSetView('catalog', {}, false)} />
            {toCart}
            <ProductDetail
              addToCart={this.props.onAddToCart}
              handleAddedToCart={this.handleAddedToCart}
            />
          </>
      );
    } else {
      return <AddedToCart
        product={this.props.product}
        onClick={this.props.onSetView}
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
    loading: state.productDetailReducer.loading,
    view: state.viewReducer.view
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onProductDetailFetch: productId => dispatch(productDetailActionCreator.productDetailFetch(productId)),
    onHandleAddedToCart: () => dispatch(productDetailActionCreator.handleAddedToCart()),
    onAddToCart: product => dispatch(cartActionCreator.addToCart(product)),
    onSetView: (name, params, fromCart) => dispatch(viewActionCreator.setView(name, params, fromCart))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);
