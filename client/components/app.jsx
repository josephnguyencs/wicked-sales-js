import React from 'react';
import Header from './header';
import ProductList from './product-list';
import ProductDetails from './product-details';
import CartSummary from './cart-summary';
import CheckoutForm from './checkout-form';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'catalog',
      params: {},
      cart: []
    };
    this.setView = this.setView.bind(this);
    this.getCartItems = this.getCartItems.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.placeOrder = this.placeOrder.bind(this);
  }

  componentDidMount() {
    this.getCartItems();
  }

  setView(name, params) {
    this.setState({
      name: name,
      params: params
    });
  }

  getCartItems() {
    fetch('/api/cart')
      .then(result => result.json())
      .then(data => {
        this.setState({ cart: this.state.cart });
      });
  }

  addToCart(product) {
    const productId = product.productId;
    const data = { productId: productId };
    fetch('/api/cart', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(data)
    })
      .then(result => result.json())
      .then(data => {
        const newCart = this.state.cart;
        newCart.push(data);
        this.setState({ cart: newCart });
      });
  }

  placeOrder(order) {
    const name = order.name;
    const creditCard = order.creditCard;
    const shippingAddress = order.shippingAddress;
    const data = { name: name, creditCard: creditCard, shippingAddress: shippingAddress };
    fetch('/api/orders', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(data)
    })
      .then(result => result.json())
      .then(data => {
        this.setState({ cart: [], name: 'catalog', params: {} });
      });
  }

  render() {
    if (this.state.name === 'catalog') {
      return (
        <div>
          <Header cartItemCount={this.state.cart.length} setView={this.setView}/>
          <ProductList setView={this.setView}/>
        </div>
      );
    } else if (this.state.name === 'details') {
      return (
        <div>
          <Header cartItemCount={this.state.cart.length} setView={this.setView}/>
          <ProductDetails addToCart={this.addToCart} viewParams={this.state.params} setView={this.setView}/>
        </div>
      );
    } else if (this.state.name === 'cart-summary') {
      return (
        <div>
          <Header cartItemCount={this.state.cart.length} setView={this.setView}/>
          <CartSummary cart={this.state.cart} setView={this.setView}/>
        </div>
      );
    } else if (this.state.name === 'checkout') {
      return (
        <div>
          <Header cartItemCount={this.state.cart.length} setView={this.setView} />
          <CheckoutForm setView={this.setView} placeOrder={this.placeOrder}/>
        </div>
      );
    }
  }
}
