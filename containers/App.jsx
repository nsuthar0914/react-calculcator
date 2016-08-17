import React, { Component, PropTypes } from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Calculator from '../components/Calculator';
import * as CalculatorActions from '../actions/calculator';

class App extends Component {
  render() {
    const { calculator, actions } = this.props;
    return (
      <div>
        <Header />
        <Calculator calculator={calculator} actions={actions} />
      </div>
    );
  }
}


App.propTypes = {
  calculator: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    calculator: state.calculator
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(CalculatorActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
