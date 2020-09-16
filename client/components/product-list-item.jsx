import React from 'react';

function ProductListItem(props) {
  return (
    <div key={props.item.productId} className="product">
      <img src={props.item.image} />
      <h2>{props.item.name}</h2>
      <h4>{props.item.price}</h4>
      <p>{props.item.shortDescription}</p>
    </div>
  );

}

export default ProductListItem;
