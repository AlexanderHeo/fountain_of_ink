import * as actionTypes from './actionTypes';

export const productDetailFetchStart = () => {
  return {
    type: actionTypes.PRODUCT_DETAIL_FETCH_START
  };
};

export const productDetailFetchFail = error => {
  return {
    type: actionTypes.PRODUCT_DETAIL_FETCH_FAIL,
    error: error
  };
};

export const productDetailFetchSuccess = product => {
  return {
    type: actionTypes.PRODUCT_DETAIL_FETCH_SUCCESS,
    product: product
  };
};

export const productDetailFetch = productId => {
  return dispatch => {
    dispatch(productDetailFetchStart());
    fetch('/api/products/' + productId)
      .then(res => res.json())
      .then(data => {
        dispatch(productDetailFetchSuccess(data));
      })
      .catch(err => dispatch(productDetailFetchFail(err)));
  };
};

export const handleAddedToCart = () => {
  return {
    type: actionTypes.HANDLE_ADDED_TO_CART
  };
};
