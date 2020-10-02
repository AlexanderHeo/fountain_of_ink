import React from 'react';

const buttonStyle = {
  padding: '10px 20px', borderRadius: '10px', marginTop: '20px'
};

const disclaimer = props => (
  <div className="row">
    <div className="disclaimer-container">
      <div className="disclaimer">
        <p>This is a demo site. You cannot purchase anything. Please do not enter any real personal data in the checkout form.</p>
        <button style={buttonStyle} onClick={props.close}>Ok, I understand</button>
      </div>
    </div>
  </div>
);

export default disclaimer;
