import React from 'react';

function Header(props) {
  return (
    <div>
      <span className="navbar-brand">
        <i className="fa fa-dollar-sign" /> Wicked Sales
      </span>
      <span className="cart-container">
        <h6>{props.cartItemCount} items</h6>
        <i className="cart-icon fas fa-shopping-cart" />
      </span>
    </div>
  );
}

export default Header;
