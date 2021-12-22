import React from 'react';

const BrandsList = ({ title, list }) => {
  return (
    <>
      <div className='brand-title'>{title}</div>
      {list.map((brand) => (
        <div className='brand-item' key={brand}>
          {brand}
        </div>
      ))}
    </>
  );
};

export default BrandsList;
