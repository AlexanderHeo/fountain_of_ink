import React from 'react';

class View extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: ''
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
      <div className="container">
        <div className="row">
          <div className="col-12 header">$Wicked Sales</div>
        </div>
        <div className="row">
          <div className="product-main d-flex">
            {
              products.map(x => {
                const name = x.name;
                const price = `$${(x.price * 0.01).toFixed(2)}`;
                const shortDescript = x.shortDescription;

                return (
                  <div className="card" key={ x.productId }>
                    <div className="card-img">
                      <img className="card-img-top" src={ x.image } alt={ x.name } />
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">{ name }</h5>
                      <p className="card-text">{ price }</p>
                      <p className="card-text">{ shortDescript }</p>
                    </div>
                  </div>
                );
              })
            }
          </div>
        </div>
      </div>
    );
  }
}

export default View;
