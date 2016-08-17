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
      return number2-number1;
    case '/':
      return number2/number1;
    case '*':
      return number1*number2;
    default:
      return number1;
  }
}

const process = (symbol, oldSymbol, number1, number2) => {
  console.log(symbol, oldSymbol, number1, number2, calculate(oldSymbol, number1, number2));
  switch(symbol){
    case 'AC':
      return 'clearState';
    case '+/-':
      return isNaN(number1) ? -1*(number2) : -1*(number1);
    case '%':
      return isNaN(number1) ? number2/100 : number1/100;
    case '=':
      return isNaN(number1) ? number2 : calculate(oldSymbol, number1, number2);
    default:
      return number1;
  }
}

class MiscButton extends Component {
  constructor(props, context) {
    super(props, context);
  }

  handleChange(symbol, number, reserveNumber1, oldSymbol) {
    const number1 = parseFloat(number);
    const number2 = reserveNumber1.length ? parseFloat(reserveNumber1) : 0;
    if (process(symbol, oldSymbol, number1, number2) === 'clearState') {
      this.props.onSaveFunction();
    } else {
      this.props.onSaveFunction(oldSymbol, String(process(symbol, oldSymbol, number1, number2)));
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

MiscButton.propTypes = {
  onSaveFunction: PropTypes.func.isRequired,
  number: PropTypes.string,
  reserveNumber1: PropTypes.string,
  symbol: PropTypes.string,
  oldSymbol: PropTypes.string
};

export default MiscButton;
