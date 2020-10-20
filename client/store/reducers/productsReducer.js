import * as actionTypes from '../actions/actionTypes';

const initialState = {
  accessories: [],
  pens: [],
  inks: [],
  loading: true
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PRODUCT_FETCH_START:
      return {
        ...state,
        loading: true
      };
    case actionTypes.PRODUCT_FETCH_SUCCESS:
      return {
        ...state,
        accessories: state.accessories.concat(action.accessories),
        pens: state.pens.concat(action.pens),
        inks: state.inks.concat(action.inks),
        loading: false
      };
    case actionTypes.PRODUCT_FETCH_FAIL:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
};

export default reducer;
