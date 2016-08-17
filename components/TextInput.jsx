import React, { Component, PropTypes } from 'react';
import { TextField } from 'material-ui';

const defaultStyle = {
  marginLeft: 20
};

class TextInput extends Component {
  constructor(props, context) {
    super(props, context);
  }

  handleEnter(e) {
    if (!isNaN(parseInt(e.target.value))) {
      this.props.onSave(e.target.value);
    }
  }

  handleChange(e) {
    if (/^\d+(\.(\d+)?)?$/.test(e.target.value)) {
      console.log(e.target.value);
      this.props.onSave(e.target.value);
    }
  }

  handleBlur(e) {
    if (!this.props.newTodo) {
      this.props.onSave(e.target.value);
    }
  }

  render() {
    return (
      <TextField style={defaultStyle}
                type="text"
                hintText={this.props.placeholder}
                autoFocus="true"
                value={this.props.text}
                onBlur={this.handleBlur.bind(this)}
                onChange={this.handleChange.bind(this)}
                onEnterKeyDown={this.handleEnter.bind(this)} />
    );
  }
}

TextInput.propTypes = {
  onSave: PropTypes.func.isRequired,
  text: PropTypes.string,
  placeholder: PropTypes.string
};

export default TextInput;
