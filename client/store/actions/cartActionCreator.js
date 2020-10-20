import * as actionTypes from './actionTypes';

export const getCartItems = () => {
  return {
    type: actionTypes.GET_CART_ITEMS
  };
};

export const addToCart = () => {
  return {
    type: actionTypes.ADD_TO_CART
  };
};

export const placeOrder = () => {
  return {
    type: actionTypes.PLACE_ORDER
  };
};
