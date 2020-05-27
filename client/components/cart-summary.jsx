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
        <h1>Nothing in the cart.</h1>
      </>
    );
  } else {
    return (
      <div>
        <BackToCatalog onClick={props.onClick} />
        <div className="d-flex shop-name cart-label">Shopping Cart</div>
        {
          cart.map(x => {
            return <CartSummaryItem
              key={x.cartItemId}
              item={x}
              view={props.onClick}
              cartQuantity={props.cartQuantity}
            />;
          })
        }
        <div className="d-flex mb-3 cart-footer">
          <CartTotalPrice cart={cart}/>
          <div className="d-flex cart-footer-button">
            <button
              className="btn btn-primary"
              type="button"
              onClick={() => props.onClick('checkout', {}, false)}
            >Checkout</button>
          </div>
        </div>
      </div>
    );
  }
}

export default CartSummary;
