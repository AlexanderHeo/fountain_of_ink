import React from 'react';
import BackToCatalog from './back-to-catalog';

class CheckoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      creditCard: '',
      address: ''
    };
  }

  render() {
    const cart = this.props.cart;
    const allPrice = [];
    cart.map(x => { allPrice.push(x.price); });
    const checkoutPrice = ((allPrice.reduce((acc, cur) => acc + cur)) * 0.01).toFixed(2);
    return (
      <>
        <BackToCatalog onClick={this.props.onClick}/>
        <div className="row">
          <div className="col-12 d-flex place-order">
            <form action="submit">
              <div className="place-order-header">
                <h3>Checkout</h3>
                <h4>Order Total: ${checkoutPrice}</h4>
              </div>
              <section>
                <p className="checkout-section">
                  <label htmlFor="name">
                    <span>Name: </span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                  />
                </p>
                <p className="checkout-section">
                  <label htmlFor="creditCard">
                    <span>Credit Card: </span>
                  </label>
                  <input
                    type="txt"
                    id="creditCard"
                    name="creditCard"
                  />
                </p>
                <p className="checkout-section">
                  <label htmlFor="address">
                    <span>Address: </span>
                  </label>
                  <textarea
                    name="address"
                    id="address"
                    cols="30"
                    rows="4">
                  </textarea>
                </p>
              </section>
            </form>
            <div className="checkout-footer">
              <div className="d-flex m-0 cart-footer">
                <div
                  className="d-flex cart-footer-detail"
                  style={{ alignItems: 'center' }}
                >
                  <div
                    className="m-0 back-to-catalog"
                    onClick={() => this.props.onClick('catalog', {})}
                    style={{ fontSize: '20px' }}
                  >&lt;Return to shopping</div>
                </div>
                <div className="d-flex cart-footer-button">
                  <button
                    className="btn btn-primary"
                    type="button"
                    onClick={this.onSubmit}
                  >Checkout</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default CheckoutForm;
