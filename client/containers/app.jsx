import React, { Component } from 'react';
import { connect } from 'react-redux';
import CartSummary from '../components/cart/cart-summary';
import Category from '../components/navigation/category';
import Modal from '../components/navigation/disclaimer-modal';
import Header from '../components/navigation/header';
import { CHOOSE_CATEGORY, SET_VIEW } from '../store/actions/actionTypes';
import CheckoutForm from './checkout/checkout-form';
import ProductDetail from './products/product-details';
import ProductList from './products/product-list';

class App extends Component {
state = {
  // view: {
  //   name: 'catalog',
  //   params: {},
  //   fromCart: false
  // },
  cart: [],
  // category: 'pen',
  cartQuantity: {},
  modalOpen: true
};

componentDidMount() {
  this.getCartItems();
}

getCartItems = () => {
  fetch('/api/cart')
    .then(res => res.json())
    .then(data => {
      if (Object.keys(data)[0] === 'error') {
        this.setState({
          cart: []
        });
      } else {
        this.setState({
          cart: data
        });
        const cart = data;
        const uniqueArr = Array.from(new Set(cart.map(x => x.productId)))
          .map(id => {
            return cart.find(x => x.productId === id);
          });
        const allProductIds = cart.map(x => {
          return x.productId;
        });
        const uniqueObj = {};
        for (var i = 0; i < uniqueArr.length; i++) {
          let count = 0;
          if (!Object.prototype.hasOwnProperty.call(uniqueObj, uniqueArr[i].productId)) {
            allProductIds.forEach(x => (x === uniqueArr[i].productId) && count++);
            uniqueObj[uniqueArr[i].productId] = count;
          }
        }
        this.setState({
          cartQuantity: uniqueObj
        });
      }
    });
}

addToCart = product => {
  // product is an object
  fetch('/api/cart', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(product)
  })
    .then(res => res.json())
    .then(data => {
      const cartCopy = this.state.cart;
      const cartAdded = cartCopy.concat(data);
      this.setState({
        cart: cartAdded
      });
    });
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

setView = (name, params, fromCart) => {
  this.props.onSetView({ name: name, params: params, fromCart: fromCart });
  // this.setState({
  //   view: { name: name, params: params, fromCart: fromCart }
  // });
}

chooseCategory = category => {
  this.props.onChooseCategory(category, { name: 'catalog', params: {}, fromCart: false });
  // this.setState({
  //   category: category,
  //   view: {
  //     name: 'catalog',
  //     params: {},
  //     fromCart: false
  //   }
  // });
}

handleCloseModal = () => {
  this.setState({
    modalOpen: false
  });
}

render() {
  const viewPageState = this.props.view.name;
  let viewPageComponent = '';
  let cartCount = 0;

  if (this.state.cart.length !== 0) {
    cartCount = this.state.cart.length;
  }
  if (viewPageState === 'catalog') {
    viewPageComponent = <ProductList
      onClick={this.props.onSetView}
      category={this.props.category}
    />;
  } else if (viewPageState === 'details') {
    viewPageComponent = <ProductDetail
      onClick={this.props.onSetView}
      addToCart={this.addToCart}
      productId={this.props.view.params.productId}
      fromCart={this.props.view.fromCart}
    />;
  } else if (viewPageState === 'cart') {
    viewPageComponent = <CartSummary
      cart={this.state.cart}
      onClick={this.props.onSetView}
      productId={this.props.view.params.productId}
      cartQuantity={this.state.cartQuantity}
    />;
  } else if (viewPageState === 'checkout') {
    viewPageComponent = <CheckoutForm
      cart={this.state.cart}
      onClick={this.props.onSetView}
      placeOrder={this.placeOrder}
    />;
  }
  return (
    <div className="container">
      {this.state.modalOpen ? <Modal close={this.handleCloseModal} /> : null}
      <Header
        cartItemCount={cartCount}
        onClick={this.props.onSetView}/>
      <Category
        chooseCategory={this.chooseCategory}/>
      {viewPageComponent}
    </div>
  );
}
}

const mapStateToProps = state => {
  return {
    view: state.view,
    category: state.category
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSetView: (name, params, fromCart) => dispatch({ type: SET_VIEW, name: name, params: params, fromCart: fromCart }),
    onChooseCategory: (category, view) => dispatch({ type: CHOOSE_CATEGORY, category: category, view: view })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);