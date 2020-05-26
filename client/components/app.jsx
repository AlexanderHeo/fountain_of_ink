import React from 'react';
import CartSummary from './cart-summary';
import Category from './category';
import CheckoutForm from './checkout-form';
import Header from './header';
import ProductDetail from './product-details';
import ProductList from './product-list';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: {
        name: 'catalog',
        params: {},
        fromCart: false
      },
      cart: [],
      addedToCart: false,
      category: 'pen'
    };
    this.setView = this.setView.bind(this);
    this.getCartItems = this.getCartItems.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.placeOrder = this.placeOrder.bind(this);
    this.chooseCategory = this.chooseCategory.bind(this);
  }

  componentDidMount() {
    this.getCartItems();
  }

  getCartItems() {
    fetch('/api/cart')
      .then(res => res.json())
      .then(data => this.setState({
        cart: data
      }));
  }

  setView(name, params, fromCart) {
    this.setState({
      view: { name: name, params: params, fromCart: fromCart },
      addedToCart: false
    });
  }

  addToCart(product) {
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
        // the product object needs to be added
        // to the this.state.cart array
        const cartCopy = this.state.cart;
        const cartAdded = cartCopy.concat(data);
        this.setState({
          cart: cartAdded,
          addedToCart: true
        });
      });
  }

  placeOrder(customer) {
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

  chooseCategory(category) {
    this.setState({
      category: category,
      view: {
        name: 'catalog',
        params: {},
        fromCart: false
      }
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
        addedToCart={this.state.addedToCart}
        fromCart={this.state.view.fromCart}
      />;
    } else if (viewPageState === 'cart') {
      viewPageComponent = <CartSummary
        cart={this.state.cart}
        onClick={this.setView}
        productId={this.state.view.params.productId}
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
