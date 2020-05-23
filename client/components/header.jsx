import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

function Header(props) {
  return (
    <div className="row">
      <div className="col-6 header">
        <h3>$Wicked Sales</h3>
      </div>
      <div className="col-6 d-flex cart">
        <h4>{props.cartItemCount} Items</h4>
        <FontAwesomeIcon icon={faShoppingCart} size='lg' />
      </div>
    </div>
  );
}

export default Header;
