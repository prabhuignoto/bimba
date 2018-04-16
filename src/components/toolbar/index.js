import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-fontawesome';
import { withStyles, css } from '../../common/withStyles';
import ToolBarStyles from './styles';

const Toolbar = ({ styles, items, openSettings }) => (
  <nav {...css(styles.nav)}>
    <ul {...css(styles.list)}>
      {items.map(item => (
        <li {...css(styles.listItem)}>
          <button
            tabIndex="0"
            {...css(styles.button)}
            title={item.name}
            onClick={() => openSettings()}
          >
            <Icon name={item.icon} {...css(styles.icon)} />
          </button>
        </li>))
      }
    </ul>
  </nav>
);

Toolbar.propTypes = {
  styles: PropTypes.shape({
    nav: PropTypes.object.isRequired,
    list: PropTypes.object.isRequired,
    listItem: PropTypes.object.isRequired,
    button: PropTypes.object.isRequired,
    content: PropTypes.object.isRequired,
    icon: PropTypes.object.isRequired,
  }).isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
  })).isRequired,
  openSettings: PropTypes.func.isRequired,
};

export default withStyles(ToolBarStyles)(Toolbar);
