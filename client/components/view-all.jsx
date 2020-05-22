import React from 'react';
import ViewAllCard from './view-all-card-component';

class ViewAll extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }

  componentDidMount() {
    fetch('/api/products')
      .then(res => res.json())
      .then(data => this.setState({
        products: data
      }));
  }

  render() {
    let products;
    if (this.state.products.length === 0) {
      products = [];
    } else {
      products = this.state.products;
    }
    return (
      <div className="row">
        <div className="product-main d-flex">
          {
            products.map(x => {
              return (
                <ViewAllCard product={x} key={x.productId}/>
              );
            })
          }
        </div>
      </div>
    );
  }
}

export default ViewAll;
