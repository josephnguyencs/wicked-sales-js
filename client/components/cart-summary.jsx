import React from 'react';
import CartSummaryItem from './cart-summary-item';

function CartSummary(props) {
  let price = 0;
  for (let i = 0; i < props.cart.length; i++) {
    price += props.cart[i].price;
  }
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
      <h3 className="total-price">Total Price: ${(price / 100).toFixed(2)}</h3>
      <button className="btn btn-success checkout" onClick={() => {
        props.setView('checkout', {});
      }}>Checkout</button>
    </div>
  );
}

export default CartSummary;
