import * as actionTypes from '../actions/actionTypes';

const initialState = {
  cart: [],
  cartQuantity: {}
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_CART_ITEMS:
      return {

      };
    case actionTypes.ADD_TO_CART:
      return {

      };
    case actionTypes.PLACE_ORDER:
      return {

      };
    default:
      return state;
  }
};

export default reducer;
