import React from 'react';
import { connect } from 'react-redux';

class ProductDetail extends React.Component {
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

const mapStateToProps = state => {
  return {
    product: state.productDetailReducer.product
  };
};

export default connect(mapStateToProps)(ProductDetail);
