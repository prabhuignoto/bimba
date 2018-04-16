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
    if (this.props.handleChange) {
      this.props.handleChange(value);
    }
  }

  render() {
    const {
      styles, label, items,
    } = this.props;
    return (
      <div {...css(styles.radio)}>
        <span {...css(styles.label)}>{label}</span>
        <div {...css(styles.radioWrapper)}>
          {items.map(x => (
            <Radio
              styles={styles}
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
  items: PropTypes.arrayOf(PropTypes.string),
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  styles: PropTypes.shape({
    radio: PropTypes.object.isRequired,
    radioWrapper: PropTypes.object.isRequired,
    radioItem: PropTypes.object.isRequired,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
};

RadioGroup.defaultProps = {
  items: [],
};

export default withStyles(Style)(RadioGroup);
