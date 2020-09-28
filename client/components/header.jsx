import React from 'react';

function Header(props) {
  return (
    <div>
      <span className="navbar-brand">
        <i className="fa fa-dollar-sign" /> Wicked Sales
      </span>
      <div className="cart-container" onClick={() => {
        props.setView('cart-summary', {});
      }}>
        <h6>{props.cartItemCount} items</h6>
        <i className="cart-icon fas fa-shopping-cart" />
      </div>
    </div>
  );
}

export default Header;
