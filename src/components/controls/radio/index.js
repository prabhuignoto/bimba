import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { css, withStyles } from '../../../common/withStyles';
import Style from './style';
import Radio from './radioItem';

class RadioGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value) {
    this.setState({
      selected: value,
    });
    this.props.handleChange(value);
  }

  render() {
    const { name, styles, label } = this.props;
    return (
      <div {...css(styles.radio)}>
        <span {...css(styles.label)}>{label}</span>
        <div {...css(styles.radioWrapper)}>
          {this.props.items.map(x => (
            <Radio
              styles={styles}
              name={name}
              {...x}
              onChange={this.handleChange}
              selectedValue={this.state.selected}
            />
          ))}
        </div>
      </div>
    );
  }
}

RadioGroup.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  styles: PropTypes.shape({
    radio: PropTypes.object.isRequired,
    radioWrapper: PropTypes.object.isRequired,
    radioItem: PropTypes.object.isRequired,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default withStyles(Style)(RadioGroup);
