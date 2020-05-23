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
        : <Details product={this.state.product} onClick={this.props.onClick}/>
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
            <p className="price">{price}</p>
            <p className="short-description">{shortDescription}</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="long-description">{longDescription}</div>
      </div>
    </div>
  );
}

export default ProductDetails;
