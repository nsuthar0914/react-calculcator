import React, { Component, PropTypes } from 'react';
import { RaisedButton } from 'material-ui';

const styles = {
  button: {
    margin: 4,
    minWidth: 50,
    width: '100%'
  }
};

const calculate = (symbol, number1, number2) => {
  switch(symbol){
    case '+':
      return number1+number2;
    case '-':
      return number2-number2;
    case '/':
      return number2/number1;
    case '*':
      return number1*number2;
    default:
      return number1;
  }
}

class FunctionButton extends Component {
  constructor(props, context) {
    super(props, context);
  }

  handleChange(symbol, number, reserveNumber1, oldSymbol) {
    const number1 = parseFloat(number);
    const number2 = reserveNumber1.length ? parseFloat(reserveNumber1) : 0;
    if (number.length) {
      this.props.onSaveFunction(symbol, String(calculate(oldSymbol, number1, number2)));
    } else {
      this.props.onSaveFunction(symbol, reserveNumber1);
    }
  }

  render() {
    const {symbol, number, reserveNumber1, oldSymbol} = this.props;
    return (
      <RaisedButton
        label={symbol}
        secondary={true}
        style={styles.button}
        onClick={() => this.handleChange(symbol, number, reserveNumber1, oldSymbol)}
      />
    );
  }
}

FunctionButton.propTypes = {
  onSaveFunction: PropTypes.func.isRequired,
  number: PropTypes.string,
  reserveNumber1: PropTypes.string,
  symbol: PropTypes.string,
  oldSymbol: PropTypes.string
};

export default FunctionButton;
