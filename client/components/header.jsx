import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

function Header(props) {
  return (
    <div className="row">
      <div className="header">
        <button
          className="logo"
          type="button"
          onClick={() => props.onClick('catalog', {}, false)}>
          <img src="/images/fountain-pen.png" alt="fountain pen"/>
        </button>
        <div className="shop-name"><h1>Fountain of Ink</h1></div>
        <div className="d-flex cart">
          <h4>{props.cartItemCount} Items</h4>
          <FontAwesomeIcon
            className="shopping-cart"
            icon={faShoppingCart}
            size='lg'
            onClick={() => props.onClick('cart', {}, false)}
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
