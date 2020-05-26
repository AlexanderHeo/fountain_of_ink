import React from 'react';

function BackToCart(props) {
  return (
    <div className="mb-2 row">
      <div
        className="back-to-cart"
        onClick={() => props.onClick('cart', {}, false)}
      >&lt;Back to cart</div>
    </div>
  );
}

export default BackToCart;
