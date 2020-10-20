import * as actionTypes from '../actions/actionTypes';

const initialState = {
  product: '',
  addedToCart: false,
  loading: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PRODUCT_DETAIL_FETCH_START:
      return {
        ...state,
        addedToCart: false,
        loading: true
      };
    case actionTypes.PRODUCT_DETAIL_FETCH_SUCCESS:
      return {
        ...state,
        product: action.product,
        addedToCart: false,
        loading: false
      };
    case actionTypes.PRODUCT_DETAIL_FETCH_FAIL:
      return {
        ...state,
        addedToCart: false,
        loading: false
      };
    case actionTypes.HANDLE_ADDED_TO_CART:
      return {
        ...state,
        product: {
          ...state.product
        },
        addedToCart: true
      };
    default:
      return state;
  }
};

export default reducer;
