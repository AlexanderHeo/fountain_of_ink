import React from 'react';
import Header from './header';
import ProductDetail from './product-details';
import ProductList from './product-list';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: {
        name: 'catalog',
        params: {}
      }
    };
    this.setView = this.setView.bind(this);
  }

  setView(name, params) {
    this.setState({
      view: { name: name, params: params }
    });
  }

  render() {
    const viewPageState = this.state.view.name;
    let viewPageComponent = '';
    if (viewPageState === 'catalog') {
      viewPageComponent = <ProductList onClick={this.setView} />;
    } else if (viewPageState === 'details') {
      viewPageComponent = < ProductDetail onClick={this.setView} productId={this.state.view.params.productId} />;
    }
    return (
      <div className="container">
        <Header />
        { viewPageComponent }
      </div>
    );
  }
}
