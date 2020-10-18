import * as actionTypes from '../actions/actionTypes';

const initialState = {
  view: {
    name: 'catalog',
    params: {},
    fromCart: false
  },
  category: 'pen'
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_VIEW: {
      return {
        ...state,
        view: {
          ...state.view,
          name: action.name,
          params: action.params,
          fromCart: action.fromCart
        }
      };
    }
    case actionTypes.CHOOSE_CATEGORY: {
      return {
        ...state,
        category: action.category,
        view: {
          ...state.view,
          name: 'catalog',
          params: {},
          fromCart: false
        }
      };
    }
    default:
      return state;
  }
};

export default reducer;
