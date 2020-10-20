import * as actionTypes from '../actions/actionTypes';

const initialState = {
  cart: [],
  cartQuantity: {}
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_CART_ITEMS_SUCCESS:
      return {
        ...state,
        cart: action.cart
      };
    case actionTypes.ADD_TO_CART_SUCCESS:
      return {
        ...state,
        cart: action.cart
      };
    case actionTypes.PLACE_ORDER_SUCCESS:
      return {
        ...state,
        cart: []
      };
    default:
      return state;
  }
};

export default reducer;
