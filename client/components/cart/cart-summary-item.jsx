import React from 'react';

const cartSummaryItem = props => {
  if (!props.item) {
    return null;
  } else {
    const name = props.item.name;
    const price = (parseInt(props.item.price) * 0.01).toFixed(2);
    const shortDescription = props.item.shortDescription;
    const id = props.item.productId;
    return (
      <div
        className="d-flex cart-item-container"
        onClick={() => props.view('details', { productId: id }, true)}>
        <div className="cart-item-image-container">
          <img src={props.item.image} alt={props.name} className="cart-item-image"/>
        </div>
        <div className="d-flex ml-3 cart-item-description">
          <h5 className="name">{name}</h5>
          <div className="price">${price} each</div>
          <div className="short-description">{shortDescription}</div>
        </div>
      </div>
    );
  }
};

export default cartSummaryItem;
