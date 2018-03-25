import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-fontawesome';
import Style from './styles';
import { withStyles } from '../../common/withStyles';
import { SpreadClassNames } from '../../common/helpers';

const Dropdown = (props) => {
  let menu = null;
  const {
    styles, items, open, handleOpen, handleSelection, selectedValue,
  } = props;
  const {
    dropdown, label, list, listItem, icon, selectedText,
  } = SpreadClassNames(styles);

  if (open === true) {
    menu = () => (
      <ol
        {...list}
        role="menu"
        tabIndex="0"
      >
        {items.map(item => (
          <li
            {...listItem}
            role="menuitem"
            onClick={() => handleSelection(item)}
            onKeyDown={() => handleSelection(item)}
            key={item}
          >
            {item}
          </li>))}
      </ol>
    );
  }
  return (
    <div
      role="button"
      {...dropdown}
      tabIndex="0"
      onClick={() => handleOpen()}
      onKeyUp={(ev) => {
          if (ev.which === '13') {
            handleOpen();
          }
        }
      }
    >
      <div {...label}>
        <span {...selectedText}>{selectedValue}</span>
        <div {...icon}>
          <Icon name="angle-down" />
        </div>
      </div>
      {typeof menu === 'function' ? menu() : null}
    </div>
  );
};

Dropdown.propTypes = {
  handleOpen: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  handleSelection: PropTypes.func.isRequired,
  selectedValue: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.string),
  styles: PropTypes.object.isRequired,
};

Dropdown.defaultProps = {
  items: [],
};

export default withStyles(Style)(Dropdown);
// export default injectSheet(Style)(Dropdown);
