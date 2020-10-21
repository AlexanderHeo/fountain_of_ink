import React from 'react';

const thankyou = props => (
  <>
    <div>Thank you for your order. We hope enjoy your purchase!
    </div>
    <button onClick={() => props.click('catalog', {}, false)}>Return</button>
  </>
);

export default thankyou;
