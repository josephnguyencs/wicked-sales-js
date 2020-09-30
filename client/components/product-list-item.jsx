import React from 'react';

function ProductListItem(props) {
  return (
    <div key={props.item.productId} className="product" onClick={() => {
      props.setView('details', props.item.productId);
    }}>
      <img className="product-list-image" src={props.item.image} />
      <h2 className="font-small">{props.item.name}</h2>
      <h2 className="font-text">${(parseInt(props.item.price) / 100).toFixed(2)}</h2>
      <h4 className="font-text">{props.item.shortDescription}</h4>
    </div>
  );

}

export default ProductListItem;
