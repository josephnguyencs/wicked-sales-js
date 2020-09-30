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
      <div className="checkout-form">
        <form onSubmit={this.handleSubmit}>
          <h1>DO NOT PUT IN REAL INFORMATION, THIS IS A DEMO</h1>
          <div className="form-group">
            <label>Name</label>
            <input className="form-input form-control" name="name" value={this.state.name} onChange={this.handleChange}/>
          </div>
          <div className="form-group">
            <label>Credit Card</label>
            <input className="form-input form-control" name="creditCard" value={this.state.creditCard} onChange={this.handleChange}/>
          </div>
          <div className="form-group">
            <label>Shipping Address</label>
            <input className="form-input form-control" name="shippingAddress" value={this.state.shippingAddress} onChange={this.handleChange}/>
          </div>
          <button className="btn btn-danger" onClick={() => {
            this.props.setView('catalog', {});
          }}>Continue shopping</button>
          <button className="place-order-button btn btn-success">Place Order</button>
        </form>
      </div>
    );
  }
}

export default CheckoutForm;
