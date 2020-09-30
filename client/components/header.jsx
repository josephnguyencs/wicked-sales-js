import React from 'react';

function Header(props) {
  return (
    <div className="header">
      <span className="coding-course navbar-brand">
        <i className="fas fa-laptop-code" /> Coding Courses
      </span>
      <button className="cart-container btn-sm btn btn-success" onClick={() => {
        props.setView('cart-summary', {});
      }}>
        <h6>{props.cartItemCount} items</h6>
        <i className="cart-icon fas fa-shopping-cart" />
      </button>
    </div>
  );
}

export default Header;
