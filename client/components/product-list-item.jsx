import React from 'react';

function ProductListItem(props) {
  return (
    <div key={props.item.productId} className="product" onClick={() => {
      props.setView('details', props.item.productId);
    }}>
      <img src={props.item.image} />
      <h2>{props.item.name}</h2>
      <h4>${(parseInt(props.item.price) / 100).toFixed(2)}</h4>
      <p>{props.item.shortDescription}</p>
    </div>
  );

}

export default ProductListItem;
