import React from 'react';
import ProductListItem from './product-list-item';

class ProductList extends React.Component {

  constructor(props) {
    super(props);
    this.state = { products: [] };
    this.getProducts = this.getProducts.bind(this);
  }

  getProducts() {
    fetch('/api/products')
      .then(response => response.json())
      .then(data => this.setState({ products: data }));
  }

  componentDidMount() {
    this.getProducts();
  }

  render() {
    const items = this.state.products.map(item => {
      return (
        <div key={item.productId} className="product">
          <img src={item.image} />
          <h2>{item.name}</h2>
          <h4>{item.price}</h4>
          <p>{item.shortDescription}</p>
        </div>
      );
    });
    return (
      <div>
        <ProductListItem products={items}/>
      </div>
    );
  }
}

export default ProductList;
