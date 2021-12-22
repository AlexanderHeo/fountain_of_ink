import React from 'react';

const Colors = ({ colors, category }) => {
  return (
    <>
      <div className='colors-section-title'>
        <h3>Shop by {category} Color</h3>
      </div>
      <div className='colors-section grid'>
        {colors.map((color) => {
          const classname = `color-container ${color.color}`;
          return (
            <div className={classname} key={color.id}>
              <div className='color-size flex'>
                <img src={color.img} alt={color.alt} />
              </div>
              <div className='color-name'>{color.color}</div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Colors;
