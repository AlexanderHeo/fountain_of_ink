import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

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
    return (
      !this.state.product
        ? <NoDetails />
        : <Details
          product={this.state.product}
          onClick={this.props.onClick}
          addToCart={this.props.addToCart}
          addedToCart={this.props.addedToCart}
        />
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
      <div className="row">
        <div className="navi" onClick={() => props.onClick('catalog', {})}>&lt;Back to catalog</div>
      </div>
      <div className="row">
        <div className="d-flex detail-container">
          <div className="d-flex detail-img">
            <img src={image} alt="{name}" />
          </div>
          <div className="detail-name-price">
            <h4 className="name">{name}</h4>
            <div className="price-description">
              <p className="price">{price}</p>
              <p className="short-description">{shortDescription}</p>
              <button
                className="btn btn-primary"
                type="button"
                onClick={() => props.addToCart(product)}
              >Add to Cart</button>
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
      <div className="row">
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
        onClick={() => props.onClick('catalog', {})}
      >Return to Catalog</button>
    </>
  );
}

export default ProductDetails;
