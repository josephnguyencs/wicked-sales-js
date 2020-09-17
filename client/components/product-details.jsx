import React from 'react';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = { product: null };
    this.setView = this.setView.bind(this);
  }

  componentDidMount() {
    fetch(`/api/products/${this.props.viewParams}`)
      .then(response => response.json())
      .then(data => this.setState({ product: data }));
  }

  setView() {
    this.props.setView('catalog', {});
  }

  render() {
    if (this.state.product) {
      return (
        <div>
          <button onClick={this.setView}>Back to Catalog</button>
          <img src={this.state.product.image} />
          <h2>{this.state.product.name}</h2>
          <h4>{this.state.product.price}</h4>
          <p>{this.state.product.shortDescription}</p>
          <p>{this.state.product.longDescription}</p>
        </div>
      );
    } else {
      return null;
    }
  }
}
export default ProductDetails;
