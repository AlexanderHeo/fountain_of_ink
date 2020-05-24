import React from 'react';

function CartSummaryItem(props) {
  if (!props.item) {
    return null;
  } else {
    const name = props.item.name;
    const price = (parseInt(props.item.price) * 0.01).toFixed(2);
    const shortDescription = props.item.shortDescription;

    return (
      <div className="d-flex cart-item-container">
        <div className="cart-item-image-container">
          <img src={props.item.image} alt={props.name} className="cart-item-image"/>
        </div>
        <div className="d-flex ml-3 cart-item-description">
          <h5 className="name">{name}</h5>
          <div className="price">${price}</div>
          <div className="short-description">{shortDescription}</div>
        </div>
      </div>
    );
  }
}

export default CartSummaryItem;
