import React, { Component } from 'react';

export default class Disclaimer extends Component {
  componentDidMount() {
    document.body.classList.add('noscroll');
  }

  componentWillUnmount() {
    document.body.classList.remove('noscroll');
  }

  render() {
    return (
      <div className="row">
        <div className='discContainer'>
          <div className='contentStyle'>
            <p>This is a demo site. You cannot purchase anything. Please do not enter any real personal data in the checkout form.</p>
            <button autoFocus className='buttonStyle' onClick={this.props.close} >Ok, I understand</button>
          </div>
        </div>
      </div>
    );
  }
}
