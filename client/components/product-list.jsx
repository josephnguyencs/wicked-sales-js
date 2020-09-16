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
    return (
      <div>
        <ProductListItem products={this.state.products}/>
      </div>
    );
  }
}

export default ProductList;
