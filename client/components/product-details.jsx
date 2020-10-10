import React, { Component } from 'react';
import AddedToCart from './added-to-cart';
import BackToCart from './back-to-cart';
import BackToCatalog from './back-to-catalog';

class ProductDetails extends Component {
state = {
  product: '',
  addedToCart: false
};

componentDidMount() {
  const productId = this.props.productId;
  fetch(`/api/products/${productId}`)
    .then(res => res.json())
    .then(data => this.setState({ product: data }));
}

  handleAddedToCart = () => {
    this.setState({ addedToCart: true });
  }

  render() {
    if (!this.state.addedToCart) {
      let toCart = '';
      if (!this.props.fromCart) {
        toCart = null;
      } else if (this.props.fromCart) {
        toCart = <BackToCart onClick={() => this.props.onClick('cart', {}, false)} />;
      }
      return (
        !this.state.product
          ? <>
            <BackToCatalog onClick={() => this.props.onClick('catalog', {}, false)} />
            <NoDetails />
          </>
          : <>
            <BackToCatalog onClick={() => this.props.onClick('catalog', {}, false)} />
            {toCart}
            <Details
              product={this.state.product}
              onClick={this.props.onClick}
              addToCart={this.props.addToCart}
              handleAddedToCart={this.handleAddedToCart}
            />
          </>
      );
    } else {
      return <AddedToCart
        product={this.state.product}
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

class Details extends React.Component {
  handleClick = () => {
    this.props.addToCart(this.props.product);
    this.props.handleAddedToCart();
  }

  render() {
    const name = this.props.product.name;
    const price = `$${(this.props.product.price * 0.01).toFixed(2)}`;
    const image = this.props.product.image;
    const shortDescription = this.props.product.shortDescription;
    const longDescription = this.props.product.longDescription;
    const detailOrCart = (
      <div className="details-main">
        <div className="d-flex detail-container">
          <div className="d-flex detail-img">
            <img src={image} alt="{name}" />
          </div>
          <div className="d-flex detail-name-price">
            <div className="d-flex name-price">
              <h4 className="name">{name}</h4>
              <p className="price">{price}</p>
            </div>
            <div className="d-flex price-description">
              <p className="short-description">{shortDescription}</p>
              <div className="button">
                <button
                  className="btn btn-primary"
                  type="button"
                  onClick={this.handleClick}
                >Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="long-description">{longDescription}</div>
        </div>
      </div>
    );
    return (
      <div>
        {detailOrCart}
      </div>
    );
  }
}

export default ProductDetails;
