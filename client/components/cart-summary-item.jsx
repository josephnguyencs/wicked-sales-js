import React from 'react';

function CartSummaryItem(props) {
  return (
    <div className="cart-summary-item" key={props.item.productId}>
      <img className="phone-image" src={props.item.image} />
      <h2>{props.item.name}</h2>
      <h4>${(props.item.price / 100).toFixed(2)}</h4>
      <p>{props.item.shortDescription}</p>
    </div>
  );
}

export default CartSummaryItem;
