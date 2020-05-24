import React from 'react';

function CartTotalPrice(props) {
  const cart = props.cart;
  const ttl = [];
  cart.map(x => ttl.push(x.price));
  const total = ttl.reduce((a, c) => a + c);
  const totalPrice = parseInt(total * 0.01).toFixed(2);
  return (
    <div className="cart-total-price">
      <span>Cart Total: ${totalPrice}</span>
    </div>
  );
}

export default CartTotalPrice;
