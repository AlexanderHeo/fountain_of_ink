import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import * as viewActionCreator from '../../store/actions/viewActionCreators';

class Thankyou extends Component {
returnToHome = () => {
  this.props.onChooseCategory('pen');
  this.props.onSetView('catalog', {}, false);
}

render() {
  return (
    <>
      <Thankyoudiv>
        <span>
          <h1>Thank you for your order. We hope enjoy your purchase!</h1>
        </span>
        <Button onClick={this.returnToHome}>Return</Button>
      </Thankyoudiv>
    </>
  );
}
}

const mapDispatchToProps = dispatch => {
  return {
    onChooseCategory: category => dispatch(viewActionCreator.chooseCategory(category)),
    onSetView: (name, params, fromCart) => dispatch(viewActionCreator.setView(name, params, fromCart))
  };
};

export default connect(null, mapDispatchToProps)(Thankyou);

const Thankyoudiv = styled.div`
height: 50vh;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
text-align: center;
`;

const Button = styled.button`
margin-top: 12px;
padding: 6px 12px;
border-radius: 6px;
`;
