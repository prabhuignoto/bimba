import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import Ionicon from 'react-ionicons';
import ToolBarStyles from './toolbar-styles';

const Toolbar = ({ classes }) => {
  const {
    nav,
    list,
    listItem,
    button,
    icon,
  } = classes;

  return (
    <nav className={nav}>
      <ul className={list}>
        <li className={listItem}>
          <button tabIndex="0" className={button}>
            <i className={icon}><Ionicon icon="md-settings" fontSize="35px" /></i>
          </button>
        </li>
        <li className={listItem}>
          <button tabIndex="0" className={button}>
            <i className={icon}><Ionicon icon="md-color-palette" fontSize="35px" /></i>
          </button>
        </li>
        <li className={listItem}>
          <button tabIndex="0" className={button}>
            <i className={icon}><Ionicon icon="md-help-circle" fontSize="35px" /></i>
          </button>
        </li>
      </ul>
    </nav>
  );
};

Toolbar.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string),
};

Toolbar.defaultProps = {
  classes: {},
};

export default injectSheet(ToolBarStyles)(Toolbar);
