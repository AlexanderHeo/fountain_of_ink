import React from 'react';

const backToCatalog = props => {
  return (
    <div className="mb-2 row">
      <div
        className="back-to-catalog"
        onClick={() => props.onClick('catalog', {}, false)}
      >&lt;Back to catalog</div>
    </div>
  );
};

export default backToCatalog;
