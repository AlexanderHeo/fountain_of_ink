import React from 'react';

const MainCategory = ({ categories }) => {
  const classname = `main-category ${categories.title} flex`;
  return (
    <div className={classname}>
      <div className='main-category-title flex'>
        <h3>{categories.title}</h3>
      </div>
      <div className='main-category-list grid'>
        {categories.categories.map((category) => {
          return (
            <div className='main-category-item-container' key={category.id}>
              <div className='main-category-type'>{category.type}</div>
              <div className='main-category-img-container flex'>
                <img
                  src={category.img}
                  alt={category.alt}
                  className='main-category-img'
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MainCategory;
