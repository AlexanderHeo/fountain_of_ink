import * as actionTypes from './actionTypes';

export const setView = (name, params, fromCart) => {
  return {
    type: actionTypes.SET_VIEW,
    name: name,
    params: params,
    fromCart: fromCart
  };
};

export const chooseCategory = category => {
  return {
    type: actionTypes.CHOOSE_CATEGORY,
    category: category
  };
};
