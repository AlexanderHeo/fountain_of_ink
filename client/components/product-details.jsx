import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import BackToCart from './back-to-cart';
import BackToCatalog from './back-to-catalog';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: ''
    };
  }

  componentDidMount() {
    const productId = this.props.productId;
    fetch(`/api/products/${productId}`)
      .then(res => res.json())
      .then(data => this.setState({ product: data }));
  }

  render() {
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
            addedToCart={this.props.addedToCart}
          />
        </>
    );
  }
}

function NoDetails() {
  return (
    <div className="d-flex no-details">
      <div className="no-details-message">The product you chose does not seem to exist in this place of existence. Please return to previous page and reassess the decisions you have made.</div>
    </div>
  );
}

function Details(props) {
  const product = props.product;
  const name = props.product.name;
  const price = `$${(props.product.price * 0.01).toFixed(2)}`;
  const image = props.product.image;
  const shortDescription = props.product.shortDescription;
  const longDescription = props.product.longDescription;
  return (
    <div className="details-main">
      <div className="">
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
                  onClick={() => props.addToCart(product)}
                >Add to Cart</button>
              </div>
              <div className="d-flex added-to-cart">
                {!props.addedToCart
                  ? null
                  : <AddedToCart
                    name={name}
                    onClick={props.onClick}
                  />
                }
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <div className="long-description">{longDescription}</div>
      </div>
    </div>
  );
}

function AddedToCart(props) {
  return (
    <>
      <div className="added-message">{props.name} has been added to the Cart&nbsp;&nbsp;
        <FontAwesomeIcon icon={faCheck} color="green"/>
      </div>
      <button
        className="btn btn-success"
        type="button"
        onClick={() => props.onClick('catalog', {}, false)}
      >Return to Catalog</button>
    </>
  );
}

export default ProductDetails;
