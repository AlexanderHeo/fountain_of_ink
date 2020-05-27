import React from 'react';

function ProductListItem(props) {
  const name = props.product.name;
  const price = `$${(props.product.price * 0.01).toFixed(2)}`;
  const shortDescript = props.product.shortDescription;
  return (
    <div className="card" onClick={() => props.view('details', { productId: props.product.productId }, false)}>
      <div className="card-img">
        <img className="card-img-top" src={props.product.image} alt={props.product.name} />
      </div>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{price}</p>
        <p className="card-text text">{shortDescript}</p>
      </div>
    </div>
  );
}

export default ProductListItem;
