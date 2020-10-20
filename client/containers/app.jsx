import React, { Component } from 'react';
import { connect } from 'react-redux';
import CartSummary from '../components/cart/cart-summary';
import Category from '../components/navigation/category';
import Modal from '../components/navigation/disclaimer-modal';
import Header from '../components/navigation/header';
import * as cartActionCreators from '../store/actions/cartActionCreator';
import * as productsActionCreators from '../store/actions/productsActionCreator';
import * as viewActionCreators from '../store/actions/viewActionCreators';
import CheckoutForm from './checkout/checkout-form';
import ProductDetails from './products/product-details';
import ProductList from './products/product-list';

class App extends Component {
state = {
  modalOpen: false
};

componentDidMount() {
  this.props.onProductFetch();
  this.props.onGetCartItems();
}

placeOrder = customer => {
  fetch('/api/orders', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(customer)
  })
    .then(res => res.json())
    .then(data => this.setState({
      view: { name: 'catalog', params: {}, fromCart: false },
      cart: []
    }));
}

handleCloseModal = () => {
  this.setState({ modalOpen: false });
}

render() {
  const viewPageState = this.props.view.name;
  let viewPageComponent = '';
  let cartCount = 0;
  if (this.props.cart.length !== 0) {
    cartCount = this.props.cart.length;
  }
  if (viewPageState === 'catalog') {
    viewPageComponent = <ProductList />;
  } else if (viewPageState === 'details') {
    viewPageComponent = <ProductDetails/>;
  } else if (viewPageState === 'cart') {
    viewPageComponent = <CartSummary/>;
  } else if (viewPageState === 'checkout') {
    viewPageComponent = <CheckoutForm
      placeOrder={this.placeOrder}
    />;
  }
  return (
    <div className="container">
      {this.state.modalOpen ? <Modal close={this.handleCloseModal} /> : null}
      <Header
        cartItemCount={cartCount}
        onClick={this.props.onSetView}/>
      <Category/>
      {viewPageComponent}
    </div>
  );
}
}

const mapStateToProps = state => {
  return {
    view: state.viewReducer.view,
    category: state.viewReducer.category,
    cart: state.cartReducer.cart
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSetView: (name, params, fromCart) => dispatch(viewActionCreators.setView(name, params, fromCart)),
    onChooseCategory: category => dispatch(viewActionCreators.chooseCategory(category)),
    onProductFetch: () => dispatch(productsActionCreators.productFetch()),
    onGetCartItems: () => dispatch(cartActionCreators.getCartItems()),
    onAddToCart: product => dispatch(cartActionCreators.addToCart(product))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
