import React, { Component, PropTypes } from 'react';
import { RaisedButton, GridList, GridTile } from 'material-ui';

import TextInput from './TextInput';
import NumberButton from './NumberButton';
import FunctionButton from './FunctionButton';
import MiscButton from './MiscButton';

const styles = {
  main: {
    width: '280px',
    margin: '50px auto'
  },
  root: {
    display: 'inline',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  },
  gridListFunction: {
    width: '70px',
    overflowY: 'auto',
    marginBottom: '20px'
  },
  gridListNumber: {
    width: '210px',
    overflowY: 'auto',
    marginBottom: '20px'
  },
  gridListMisc: {
    width: '282px',
    overflowY: 'auto',
    marginTop: '30px'
  },
  gridTile: {
    textAlign: 'center'
  },
  button: {
    margin: '4px',
    minWidth: '50px',
    width: '100%'
  }
};
const numbers = ['1','2','3', '4', '5', '6', '7', '8', '9', '0', '.'];
const functions = ['+', '-','/', '*'];
const misc = ['AC', '+/-', '%', '='];

class Calculator extends Component {
  constructor(props, context) {
    super(props, context);
    this.onSave = this.onSave.bind(this);
    this.onSaveFunction = this.onSaveFunction.bind(this);
  }

  onSave(number) {
    return this.props.actions.updateNumber(number);
  }

  onSaveFunction(symbol, number) {
    return this.props.actions.updateFunction(symbol, number);
  }

  render() {
    const { calculator, actions } = this.props;
    return (
      <section className="main" style={styles.main}>
        <TextInput
          onSave={this.onSave}
          text={calculator.isShowingResult
            ? calculator.reserveNumber1
            : calculator.number}
          placeholder="Enter a number"
        />
        <GridList cols={4}>
          <GridTile style={styles.root} cols={3}>
            <GridList
              cellHeight={50}
              cols={3}
              style={styles.gridListNumber}
            >
              {numbers.map((number, i) => (
                <GridTile
                  key={i}
                  cols={number === '0' ? 2 : 1}
                  style={styles.gridTile}
                >
                  <NumberButton
                    onSave={this.onSave}
                    number={number}
                    text={calculator.number}
                  />
                </GridTile>
              ))}
            </GridList>
          </GridTile>
          <GridTile style={styles.root} cols={1}>
            <GridList
              cellHeight={50}
              cols={1}
              style={styles.gridListFunction}
            >
              {functions.map((symbol, i) => (
                <GridTile
                  key={i}
                  cols={1}
                  style={styles.gridTile}
                >
                  <FunctionButton
                    onSave={this.onSave}
                    onSaveFunction={this.onSaveFunction}
                    symbol={symbol}
                    number={calculator.number}
                    oldSymbol={calculator.symbol}
                    reserveNumber1={calculator.reserveNumber1}
                  />
                </GridTile>
              ))}
            </GridList>
          </GridTile>
          <GridTile style={styles.root} cols={4}>
            <GridList
              cellHeight={50}
              cols={4}
              style={styles.gridListMisc}
            >
              {misc.map((symbol, i) => (
                <GridTile
                  key={i}
                  cols={1}
                  style={styles.gridTile}
                >
                  <MiscButton
                    onSave={this.onSave}
                    onSaveFunction={this.onSaveFunction}
                    symbol={symbol}
                    number={calculator.number}
                    oldSymbol={calculator.symbol}
                    reserveNumber1={calculator.reserveNumber1}
                  />
                </GridTile>
              ))}
            </GridList>
          </GridTile>
        </GridList>
      </section>
    );
  }
}

Calculator.propTypes = {
  calculator: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

export default Calculator;
