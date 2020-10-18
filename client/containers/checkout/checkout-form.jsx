import React, { Component } from 'react';
import BackToCatalog from '../../components/navigation/back-to-catalog';

class CheckoutForm extends Component {
state = {
  name: '',
  creditCard: '',
  address: '',
  validInput: ''
};

  handleChange = event => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    this.setState({
      [name]: value,
      validInput: ''
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.validInput) {
      this.setState({
        validInput: ''
      });
    } else {
      if (!this.state.name) {
        this.setState({
          validInput: 'name'
        });
      } else if (!this.state.creditCard) {
        this.setState({
          validInput: 'creditCard'
        });
      } else if (!this.state.address) {
        this.setState({
          validInput: 'address'
        });
      } else {
        const customerInfo = {
          name: this.state.name,
          creditCard: this.state.creditCard,
          shippingAddress: this.state.address
        };
        this.props.placeOrder(customerInfo);
        this.setState({
          name: '',
          creditCard: '',
          address: '',
          validInput: ''
        });
      }
    }
  }

  handleValidInput = event => {
    const name = event.target.name;
    if (this.state.validInput === name) {
      this.setState({
        validInput: ''
      });
    }
  }

  render() {
    const validInput = this.state.validInput;
    const cart = this.props.cart;
    const allPrice = [];
    cart.map(x => { allPrice.push(x.price); });
    let checkoutPrice = 0;
    if (allPrice.length > 1) {
      checkoutPrice = ((allPrice.reduce((acc, cur) => acc + cur), 0) * 0.01).toFixed(2);
    } else if (allPrice.length === 0) {
      checkoutPrice = 0;
    } else {
      checkoutPrice = (allPrice[0] * 0.01).toFixed(2);
    }
    return (
      <>
        <BackToCatalog onClick={this.props.onClick}/>
        <div className="row">
          <div className="col-12 d-flex place-order">
            <form onSubmit={this.handleSubmit}>
              <div className="d-flex place-order-header">
                <h3>Checkout</h3>
                <h4>Order Total: ${checkoutPrice}</h4>
              </div>
              <div style={{ textAlign: 'center', border: '1px solid rgb(255, 95, 95)', borderRadius: '10px', margin: '20px', padding: '20px', color: 'rgb(255, 95, 95)' }}>
                <h4>Reminder: this is a demo site</h4>
                <h4>Please do not enter real personal information.</h4>
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
                    value={this.state.name}
                    placeholder='Name'
                    onChange={this.handleChange}
                    onBlur={this.handleValidInput}
                  />
                </p>
                {
                  this.state.validInput === 'name'
                    ? <Invalid invalidField='name' />
                    : null
                }
                <p className="checkout-section">
                  <label htmlFor="creditCard">
                    <span>Credit Card: </span>
                  </label>
                  <input
                    type="txt"
                    id="creditCard"
                    name="creditCard"
                    value={this.state.creditCard}
                    placeholder='Credit Card'
                    onChange={this.handleChange}
                    onBlur={this.handleValidInput}
                  />
                </p>
                {
                  this.state.validInput === 'creditCard'
                    ? <Invalid invalidField='credit card' />
                    : null
                }
                <p className="checkout-section">
                  <label htmlFor="address">
                    <span>Address: </span>
                  </label>
                  <textarea
                    name="address"
                    id="address"
                    cols="30"
                    rows="4"
                    value={this.state.address}
                    placeholder='Address'
                    onChange={this.handleChange}
                    onBlur={this.handleValidInput}>
                  </textarea>
                </p>
                {
                  this.state.validInput === 'address'
                    ? <Invalid invalidField='address' />
                    : null
                }
              </section>
            </form>
            <div className="checkout-footer">
              <div className="d-flex cart-footer">
                <div
                  className="d-flex cart-footer-detail"
                  style={{ alignItems: 'center' }}
                >
                  <div
                    className="m-0 back-to-catalog"
                    onClick={() => this.props.onClick('catalog', {}, false)}
                    style={{ fontSize: '20px' }}
                  >&lt;Return to shopping</div>
                </div>
                <div className="d-flex cart-footer-button">
                  {
                    !validInput
                      ? <button
                        className="btn btn-primary"
                        type="button"
                        onClick={this.handleSubmit}
                      >Checkout</button>
                      : null
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

function Invalid(props) {
  return (
    <div className="invalid-message">{`**You must enter a(n) ${props.invalidField}`}</div>
  );
}

export default CheckoutForm;
