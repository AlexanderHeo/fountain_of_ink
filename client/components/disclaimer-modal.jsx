import React from 'react';

const disclaimer = props => (
  <div className="row" style={{
    position: 'absolute', width: '100%', height: '100%', zIndex: '10', backgroundColor: 'rgba(51, 51, 51, 0.9)', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '26px', color: '#eee'
  }}>
    <div style={{
      width: '50%', textAlign: 'center', padding: '30px', backgroundColor: '#222', borderRadius: '20px'
    }}>
      <div>
        <p>This is a demo site. You cannot purchase anything. Please do not enter any real personal data in the checkout form.</p>
      </div>
      <button style={{
        padding: '10px 20px',
        borderRadius: '10px',
        marginTop: '20px'
      }} onClick={props.close}>Ok, I understand</button>
    </div>
  </div>
);

export default disclaimer;
