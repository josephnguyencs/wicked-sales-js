import React from 'react';

function ProductListItem(props) {
  const items = props.products.map(item => {
    return (
      <div key={item.productId} className="product">
        <img src={item.image}/>
        <h2>{item.name}</h2>
        <h4>{item.price}</h4>
        <p>{item.shortDescription}</p>
      </div>
    );
  });
  return (
    <div className="product-container">
      {items}
    </div>
  );

}

export default ProductListItem;
