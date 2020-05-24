import React from 'react';
import BackToCatalog from './back-to-catalog';
import CartSummaryItem from './cart-summary-item';
import CartTotalPrice from './cart-total-price';

function CartSummary(props) {
  const cart = props.cart;
  if (cart.length === 0) {
    return (
      <>
        <BackToCatalog onClick={props.onClick}/>
        <h1>Nothing to report</h1>;
      </>
    );
  } else {
    return (
      <div>
        <BackToCatalog onClick={props.onClick} />
        {
          cart.map(x => {
            return <CartSummaryItem
              key={x.cartItemId}
              item={x}
            />;
          })
        }
        <CartTotalPrice cart={cart}/>
      </div>
    );
  }
}

export default CartSummary;
