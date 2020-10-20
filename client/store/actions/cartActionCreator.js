import * as actionTypes from './actionTypes';

export const getCartItemsStart = () => {
  return {
    type: actionTypes.GET_CART_ITEMS_START
  };
};

export const getCartItemsFail = error => {
  return {
    type: actionTypes.GET_CART_ITEMS_FAIL,
    error: error
  };
};

export const getCartItemsSuccess = cart => {
  return {
    type: actionTypes.GET_CART_ITEMS_SUCCESS,
    cart: cart
  };
};

export const getCartItems = () => {
  return dispatch => {
    dispatch(getCartItemsStart());
    fetch('/api/cart')
      .then(res => res.json())
      .then(data => {
        dispatch(getCartItemsSuccess(data));
      });
  };
};

export const addToCartStart = () => {
  return {
    type: actionTypes.ADD_TO_CART_START
  };
};

export const addToCartFail = error => {
  return {
    type: actionTypes.ADD_TO_CART_FAIL,
    error: error
  };
};

export const addToCartSuccess = cart => {
  return {
    type: actionTypes.ADD_TO_CART_SUCCESS,
    cart: cart
  };
};

export const addToCart = product => {
  return (dispatch, getState) => {
    dispatch(addToCartStart());
    fetch('/api/cart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(product)
    })
      .then(res => res.json())
      .then(data => {
        const cart = getState().cartReducer.cart;
        const updatedCart = cart.concat(data);
        dispatch(addToCartSuccess(updatedCart));
      })
      .catch(err => dispatch(addToCartFail(err)));
  };
};

export const placeOrder = () => {
  return {
    type: actionTypes.PLACE_ORDER
  };
};
