import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const addedToCart = props => {
  const product = props.product;
  return (
    <>
      <div className="d-flex detail-container added-modal">
        <div className="d-flex detail-image-container">
          <div className="detail-img">
            <img src={product.image} alt="{name}" />
          </div>
        </div>
        <div className="d-flex detail-image-name-price-container">
          <div className="added-message">{product.name} has been added to the Cart&nbsp;&nbsp;
            <FontAwesomeIcon icon={faCheck} color="green" />
          </div>

          <div className="d-flex detail-name-price">
            <div className="d-flex name-price">
              <h4 className="name">{name}</h4>
              {/* <p className="price">{price}</p> */}
            </div>
          </div>
          <div className="modal-button-container">
            <button
              className="btn btn-success"
              type="button"
              onClick={() => props.onClick('catalog', {}, false)}
            >Return to Catalog</button>
            <button
              className="btn btn-primary"
              type="button"
              onClick={() => props.onClick('cart', {}, false)}
            >Go To Cart</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default addedToCart;
