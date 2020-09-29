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
        <div className="product-details">
          <button className="btn btn-danger back-to-catalog" onClick={this.setView}>Back to Catalog</button>
          <div className="product-image">
            <img className="product-pic" src={this.state.product.image} />
            <div className="product-desc">
              <h2>{this.state.product.name}</h2>
              <h4>${(parseInt(this.state.product.price / 100).toFixed(2))}</h4>
              <p>{this.state.product.shortDescription}</p>
              <button className="add-to-cart btn btn-success" onClick={() => {
                this.props.addToCart(this.state.product);
              }}>Add to Cart</button>
            </div>
          </div>
          <p>{this.state.product.longDescription}</p>
        </div>
      );
    } else {
      return null;
    }
  }
}
export default ProductDetails;
