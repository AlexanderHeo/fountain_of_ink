import React, { Component } from 'react';
import CartSummary from './cart-summary';
import Category from './category';
import CheckoutForm from './checkout-form';
import Modal from './disclaimer-modal';
import Header from './header';
import ProductDetail from './product-details';
import ProductList from './product-list';

class App extends Component {
state = {
  view: {
    name: 'catalog',
    params: {},
    fromCart: false
  },
  cart: [],
  category: 'pen',
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

setView = (name, params, fromCart) => {
  this.setState({
    view: { name: name, params: params, fromCart: fromCart }
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

chooseCategory = category => {
  this.setState({
    category: category,
    view: {
      name: 'catalog',
      params: {},
      fromCart: false
    }
  });
}

handleCloseModal = () => {
  this.setState({
    modalOpen: false
  });
}

render() {
  const viewPageState = this.state.view.name;
  let viewPageComponent = '';
  let cartCount = 0;

  if (this.state.cart.length !== 0) {
    cartCount = this.state.cart.length;
  }
  if (viewPageState === 'catalog') {
    viewPageComponent = <ProductList
      onClick={this.setView}
      category={this.state.category}
    />;
  } else if (viewPageState === 'details') {
    viewPageComponent = <ProductDetail
      onClick={this.setView}
      addToCart={this.addToCart}
      productId={this.state.view.params.productId}
      fromCart={this.state.view.fromCart}
    />;
  } else if (viewPageState === 'cart') {
    viewPageComponent = <CartSummary
      cart={this.state.cart}
      onClick={this.setView}
      productId={this.state.view.params.productId}
      cartQuantity={this.state.cartQuantity}
    />;
  } else if (viewPageState === 'checkout') {
    viewPageComponent = <CheckoutForm
      cart={this.state.cart}
      onClick={this.setView}
      placeOrder={this.placeOrder}
    />;
  }
  return (
    <div className="container">
      {this.state.modalOpen ? <Modal close={this.handleCloseModal} /> : null}
      <Header
        cartItemCount={cartCount}
        onClick={this.setView}/>
      <Category
        chooseCategory={this.chooseCategory}/>
      {viewPageComponent}
    </div>
  );
}
}

export default App;
