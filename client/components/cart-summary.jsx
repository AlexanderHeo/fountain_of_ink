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
        <h1>Nothing to report</h1>
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
        <div className="d-flex cart-price-checkout">
          <CartTotalPrice cart={cart}/>
          <div className="d-flex checkoutButton">
            <button
              className="btn btn-primary"
              type="button"
              onClick={() => props.onClick('checkout', {})}
            >Checkout</button>
          </div>
        </div>
      </div>
    );
  }
}

export default CartSummary;
