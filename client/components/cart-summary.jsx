import React from 'react';
import CartSummaryItem from './cart-summary-item';

function CartSummary(props) {
  const items = props.cart.map(item => {
    return (
      <CartSummaryItem key={item.productId} item={item}/>
    );
  });
  return (
    <div className="cart-summary-container">
      <button className="back-to-catalog btn btn-danger" onClick={() => {
        props.setView('catalog', {});
      }}>Back to catalog</button>
      <h1>My Cart</h1>
      <div className="cart-summary-item-container">
        {items}
      </div>
      <button className="btn btn-success" onClick={() => {
        props.setView('checkout', {});
      }}>Checkout</button>
    </div>
  );
}

export default CartSummary;
