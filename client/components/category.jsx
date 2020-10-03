import React from 'react';

function Category(props) {
  return (
    <div className="row">
      <div className="col-12 category">
        <button
          className = 'btn btn-secondary'
          type="button"
          onClick={() => props.chooseCategory('pen')}
        >Fountain Pens</button>
        <button
          className='btn btn-secondary'
          type="button"
          onClick={() => props.chooseCategory('ink')}
        >Bottled Ink</button>
        <button
          className='btn btn-secondary'
          type="button"
          onClick={() => props.chooseCategory('accessories')}
        >Accessories</button>
      </div>
    </div>
  );
}

export default Category;
