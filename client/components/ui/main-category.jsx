import React from 'react';

const MainCategory = ({ title, categories }) => {
  const classname = `main-category ${title} flex`;
  return (
    <div className={classname}>
      <div className='main-category-title flex'>
        <h3>{title}</h3>
      </div>
      <div className='main-category-list grid'>
        {categories.map((category) => {
          return (
            <div className='main-category-item-container flex' key={category}>
              <div className='main-category-item flex'>
                <div>{category}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MainCategory;
