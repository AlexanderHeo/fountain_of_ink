import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

function Header(props) {
  return (
    <div className="row">
      <div className="col-6 header">
        <button
          className="wicked-sales"
          type="button"
          onClick={() => props.onClick('catalog', {}, false)}>
          <img src="/images/pen.png" alt="fountain pen"/>
        </button>
      </div>
      <div className="col-6 d-flex cart">
        <h4>{props.cartItemCount} Items</h4>
        <FontAwesomeIcon
          className="shopping-cart"
          icon={faShoppingCart}
          size='lg'
          onClick={() => props.onClick('cart', {}, false)}
        />
      </div>
    </div>
  );
}

export default Header;
