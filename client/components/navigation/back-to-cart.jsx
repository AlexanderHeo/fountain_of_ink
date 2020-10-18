import React from 'react';

const backToCart = props => {
  return (
    <div className="mb-2 row">
      <div
        className="back-to-cart"
        onClick={() => props.onClick('cart', {}, false)}
      >&lt;Back to cart</div>
    </div>
  );
};

export default backToCart;
