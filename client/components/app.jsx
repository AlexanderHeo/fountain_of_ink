import React from 'react';
import Header from './header';
import ProductDetail from './product-details';
import ProductList from './product-list';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: {
        name: 'catalog',
        params: {}
      },
      cart: [],
      addedToCart: false
    };
    this.setView = this.setView.bind(this);
    this.getCartItems = this.getCartItems.bind(this);
    this.addToCart = this.addToCart.bind(this);
  }

  componentDidMount() {
    this.getCartItems();
  }

  setView(name, params) {
    this.setState({
      view: { name: name, params: params },
      addedToCart: false
    });
  }

  getCartItems() {
    fetch('/api/cart')
      .then(res => res.json())
      .then(data => this.setState({
        cart: data
      }));
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
        // to the this.start.cart array
        const cartCopy = this.state.cart;
        const cartAdded = cartCopy.concat(data);
        this.setState({
          cart: cartAdded,
          addedToCart: true
        });
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
      viewPageComponent = <ProductList onClick={this.setView} />;
    } else if (viewPageState === 'details') {
      viewPageComponent = <ProductDetail
        onClick={this.setView}
        addToCart={this.addToCart}
        productId={this.state.view.params.productId}
        addedToCart={this.state.addedToCart}
      />;
    }
    return (
      <div className="container">
        <Header cartItemCount={cartCount} />
        { viewPageComponent }
      </div>
    );
  }
}
