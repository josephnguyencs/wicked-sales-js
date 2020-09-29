import React from 'react';

class CheckoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      creditCard: '',
      shippingAddress: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const order = this.state;
    this.props.placeOrder(order);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Name</label>
          <input name="name" value={this.state.name} onChange={this.handleChange}/>
          <label>Credit Card</label>
          <input name="creditCard" value={this.state.creditCard} onChange={this.handleChange}/>
          <label>Shipping Address</label>
          <input name="shippingAddress" value={this.state.shippingAddress} onChange={this.handleChange}/>
          <button onClick={() => {
            this.props.setView('catalog', {});
          }}>Continue shopping</button>
          <button>Place Order</button>
        </form>
      </div>
    );
  }
}

export default CheckoutForm;
