import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

function AddedToCart(props) {
  return (
    <>
      <div className="added-message">{props.name} has been added to the Cart&nbsp;&nbsp;
        <FontAwesomeIcon icon={faCheck} color="green" />
      </div>
      <button
        className="btn btn-success"
        type="button"
        onClick={() => props.onClick('catalog', {}, false)}
      >Return to Catalog</button>
    </>
  );
}

export default AddedToCart;
