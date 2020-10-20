import React from 'react';
import { connect } from 'react-redux';
import * as viewActionCreators from '../../store/actions/viewActionCreators.js';
import BackToCatalog from '../navigation/back-to-catalog';
import CartSummaryItem from './cart-summary-item';
import CartTotalPrice from './cart-total-price';

const cartSummary = props => {
  const cart = props.cart;
  if (cart.length === 0) {
    return (
      <>
        <BackToCatalog onClick={props.onSetView}/>
        <h1>Nothing in the cart.</h1>
      </>
    );
  } else {
    return (
      <div>
        <BackToCatalog onClick={props.onSetView} />
        <div className="d-flex shop-name cart-label">Shopping Cart</div>
        {
          cart.map(x => {
            return <CartSummaryItem
              key={x.cartItemId}
              item={x}
              view={props.onSetView}
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
              onClick={() => props.onSetView('checkout', {}, false)}
            >Checkout</button>
          </div>
        </div>
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    cart: state.cartReducer.cart,
    cartQuantity: state.cartReducer.cartQuantity,
    view: state.viewReducer.view
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSetView: (name, params, fromCart) => dispatch(viewActionCreators.setView(name, params, fromCart))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(cartSummary);
