import React from 'react';
import { connect } from 'react-redux';
import Spinner from '../../components/navigation/spinner';
import ProductListItem from '../../components/products/product-list-item';

const productList = props => {
  let productList = <Spinner />;
  let products = [];
  if (!props.loading) {
    if (props.category === 'accessories') {
      products = props.accessories;
    } else if (props.category === 'pen') {
      products = props.pens;
    } else if (props.category === 'ink') {
      products = props.inks;
    }
    productList = products.map(x => {
      return (
        <ProductListItem
          product={x}
          key={x.productId}
        />
      );
    });
  }
  return (
    <div className="row">
      <div className="product-main d-flex">
        {productList}
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    category: state.viewReducer.category,
    accessories: state.productReducer.accessories,
    pens: state.productReducer.pens,
    inks: state.productReducer.inks,
    loading: state.productReducer.loading
  };
};

export default connect(mapStateToProps)(productList);
