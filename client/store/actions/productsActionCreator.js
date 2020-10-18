import * as actionTypes from './actionTypes';

export const productFetchStart = () => {
  return {
    type: actionTypes.PRODUCT_FETCH_START
  };
};

export const productFetchFail = error => {
  return {
    type: actionTypes.PRODUCT_FETCH_FAIL,
    error: error
  };
};

export const productFetchSuccess = (accessories, pens, inks) => {
  return {
    type: actionTypes.PRODUCT_FETCH_SUCCESS,
    accessories: accessories,
    pens: pens,
    inks: inks
  };
};

export const productFetch = () => {
  return dispatch => {
    dispatch(productFetchStart());
    fetch('api/products')
      .then(res => res.json())
      .then(data => {
        const accessories = [];
        const pens = [];
        const inks = [];
        data.map(x => {
          if (x.category === 'accessories') {
            accessories.push(x);
          } else if (x.category === 'pen') {
            pens.push(x);
          } else if (x.category === 'ink') {
            inks.push(x);
          }
        });
        dispatch(productFetchSuccess(accessories, pens, inks));
      })
      .catch(err => {
        dispatch(productFetchFail(err));
      });
  };
};
