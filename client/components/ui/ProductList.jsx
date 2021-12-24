import React from 'react';

const ProductList = ({ products }) => {
  return (
    <div className='product-list-container grid'>
      {products.map((product) => {
        return (
          <div className='product flex' key={product.id}>
            <img src={product.img} alt={product.alt} />
            <div className='product-title'>{product.title}</div>
            <div className='product-price'>$49.99</div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;
