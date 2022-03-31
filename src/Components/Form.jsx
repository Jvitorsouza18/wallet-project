import propTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { fetchAPI } from '../actions';

class Form extends React.Component {
  componentDidMount() {
    const { getCurrencyList } = this.props;
    getCurrencyList();
  }

  render() {
    return (
      <div>
        <p>Form</p>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getCurrencyList: () => dispatch(fetchAPI()),
});

Form.propTypes = {
  getCurrencyList: propTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Form);
