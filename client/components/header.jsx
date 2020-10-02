import React from 'react';

function Header(props) {
  return (
    <div className="header">
      <span className="coding-course navbar-brand">
        <i className="fas fa-laptop-code" /> Coding Courses
      </span>
      <div className="cart-container" onClick={() => {
        props.setView('cart-summary', {});
      }}>
        <h6>{props.cartItemCount} items</h6>
        <i className="cart-icon fas fa-shopping-cart"></i>
      </div>
    </div>
  );
}

export default Header;
