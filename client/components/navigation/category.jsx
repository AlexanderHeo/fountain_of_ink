import React from 'react';
import { connect } from 'react-redux';
import * as viewActionCreators from '../../store/actions/viewActionCreators';

const category = props => {
  return (
    <div className="row">
      <div className="col-12 category">
        <button
          className = 'btn btn-secondary'
          type="button"
          onClick={() => props.onChooseCategory('pen')}
        >Fountain Pens</button>
        <button
          className='btn btn-secondary'
          type="button"
          onClick={() => props.onChooseCategory('ink')}
        >Bottled Ink</button>
        <button
          className='btn btn-secondary'
          type="button"
          onClick={() => props.onChooseCategory('accessories')}
        >Accessories</button>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    onChooseCategory: category => dispatch(viewActionCreators.chooseCategory(category))
  };
};

export default connect(null, mapDispatchToProps)(category);
