import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import App from './containers/app';
import productDetailReducer from './store/reducers/productDetailReducer';
import productReducer from './store/reducers/productsReducer';
import viewReducer from './store/reducers/viewReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducer = combineReducers({
  viewReducer: viewReducer,
  productReducer: productReducer,
  productDetailReducer: productDetailReducer
});

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
);
