import React from 'react';
import BackToCatalog from './back-to-catalog';

class CheckoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      creditCard: '',
      address: '',
      validInput: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleValidInput = this.handleValidInput.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    this.setState({
      [name]: value,
      validInput: ''
    });
  }

  handleSubmit(event) {
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

  handleValidInput(event) {
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
    const checkoutPrice = ((allPrice.reduce((acc, cur) => acc + cur)) * 0.01).toFixed(2);
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
              <div className="d-flex m-0 cart-footer">
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
    <div className="invalid-message">{`You must enter a(n) ${props.invalidField}`}</div>
  );
}

export default CheckoutForm;
