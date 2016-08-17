import React, { Component, PropTypes } from 'react';
import { RaisedButton } from 'material-ui';

const styles = {
  button: {
    margin: 4,
    minWidth: 50,
    width: '100%'
  }
};

class NumberButton extends Component {
  constructor(props, context) {
    super(props, context);
  }

  handleChange(num) {
    if (/^\d+(\.(\d+)?)?$/.test(`${this.props.text}${num}`)) {
      this.props.onSave(`${this.props.text}${num}`);
    }
  }

  render() {
    const {number} = this.props;
    return (
      <RaisedButton
        label={number}
        primary={true}
        style={styles.button}
        onClick={() => this.handleChange(number)}
      />
    );
  }
}

NumberButton.propTypes = {
  onSave: PropTypes.func.isRequired,
  text: PropTypes.string,
  number: PropTypes.string
};

export default NumberButton;
