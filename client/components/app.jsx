import React from 'react';
import Header from './header';
import ProductList from './product-list';
import ProductDetails from './product-details';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'catalog',
      params: {}
    };
    this.setView = this.setView.bind(this);
  }

  setView(name, params) {
    this.setState({
      name: name,
      params: params
    });
  }

  render() {
    if (this.state.name === 'catalog') {
      return (
        <div>
          <Header />
          <ProductList setView={this.setView}/>
        </div>
      );
    } else if (this.state.name === 'details') {
      return (
        <div>
          <Header />
          <ProductDetails viewParams={this.state.params} setView={this.setView}/>
        </div>
      );
    }
  }
}
