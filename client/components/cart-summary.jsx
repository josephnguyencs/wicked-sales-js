import React from 'react';
import CartSummaryItem from './cart-summary-item';

function CartSummary(props) {
  const items = props.cart.map(item => {
    return (
      <CartSummaryItem key={item.productId} item={item}/>
    );
  });
  return (
    <div>
      <h6 onClick={() => {
        props.setView('catalog', {});
      }}>Back to catalog</h6>
      <h1>My Cart</h1>
      {items}
      <button onClick={() => {
        props.setView('checkout', {});
      }}>Checkout</button>
    </div>
  );
}

export default CartSummary;
