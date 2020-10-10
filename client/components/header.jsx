import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const header = props => {
  return (
    <div className="row">
      <div className="header">
        <div
          className="logo">
          <img src="/images/fountain-pen.png" alt="fountain pen"/>
        </div>
        <div className="shop-name"><h1>Fountain of Ink</h1></div>
        <div
          className="d-flex cart"
          onClick={() => props.onClick('cart', {}, false)}
        >
          <h4>{props.cartItemCount} Items</h4>
          <FontAwesomeIcon
            className="shopping-cart"
            icon={faShoppingCart}
            size='lg'
          />
        </div>
      </div>
    </div>
  );
};

export default header;
