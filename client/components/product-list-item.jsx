import React from 'react';

function ProductListItem(props) {
  return (
    <div className="product-container">
      {props.products}
    </div>
  );

}

export default ProductListItem;
