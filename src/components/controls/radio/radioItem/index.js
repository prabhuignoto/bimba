import React from 'react';
import PropTypes from 'prop-types';
import { css, withStyles } from '../../../../common/withStyles';
import Style from './style';

const RadioItem = ({
  styles, label, name, onChange, selectedValue
}) => {
  const id = `radio_${name}`;
  const checked = selectedValue === name;
  let radioItemClass = null;
  if (checked) {
    radioItemClass = css(styles.radioItem, styles.radioOn);
  } else {
    radioItemClass = css(styles.radioItem, styles.radioOff);
  }
  return (
    <div {...radioItemClass}>
      <input
        type="radio"
        value={name}
        name={name}
        id={id}
        checked={checked}
        onChange={(event) => {
          const { target } = event;
          if (target.checked) {
            onChange(target.value);
          }
        }}
        {...css(styles.radioNative)}
      />
      <label
        htmlFor={id}
        {...css(styles.radioLabel)}
      >
        {label}
      </label>
    </div>);
};

RadioItem.propTypes = {
  styles: PropTypes.shape({
    radio: PropTypes.object.isRequired,
    radioWrapper: PropTypes.object.isRequired,
    radioItem: PropTypes.object.isRequired,
  }).isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default withStyles(Style)(RadioItem);
