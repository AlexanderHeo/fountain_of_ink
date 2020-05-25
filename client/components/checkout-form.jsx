import React from 'react';

class CheckoutForm extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-12 place-order">
          <form action="submit">
            <div className="place-order-header">
              <h3>Checkout</h3>
              <h4>Order Total: $100.00</h4>
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
                <label htmlFor="email">
                  <span>Email: </span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
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
        </div>
      </div>
    );
  }
}

export default CheckoutForm;
