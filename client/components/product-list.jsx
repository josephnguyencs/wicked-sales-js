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
        <ProductListItem key={item.productId} item={item}/>
      );
    });
    return (
      <div className="product-container">
        {items}
      </div>
    );
  }
}

export default ProductList;
