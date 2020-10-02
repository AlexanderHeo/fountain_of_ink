import React from 'react';

const discContainer = {
  position: 'absolute',
  top: '0',
  left: '0',
  height: '100%',
  width: '100%',
  zIndex: '100',
  backgroundColor: 'rgba(51, 51, 51, 0.9)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '26px',
  color: '#eee'
};
const contentStyle = {
  width: '50%',
  textAlign: 'center',
  padding: '30px',
  backgroundColor: '#222',
  borderRadius: '20px'
};
const buttonStyle = {
  padding: '10px 20px', borderRadius: '10px', marginTop: '20px'
};

const disclaimer = props => (
  <div className="row">
    <div style={discContainer}>
      <div style={contentStyle}>
        <p>This is a demo site. You cannot purchase anything. Please do not enter any real personal data in the checkout form.</p>
        <button style={buttonStyle} onClick={props.close}>Ok, I understand</button>
      </div>
    </div>
  </div>
);

export default disclaimer;
