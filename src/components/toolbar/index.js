import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-fontawesome';
import { withStyles } from '../../common/withStyles';
import { SpreadClassNames } from '../../common/helpers';
import ToolBarStyles from './styles';

const Toolbar = ({ styles, items, openSettings }) => {
  const {
    nav,
    list,
    listItem,
    button,
    icon,
  } = SpreadClassNames(styles);

  return (
    <nav {...nav}>
      <ul {...list}>
        {items.map(item => (
          <li {...listItem}>
            <button
              tabIndex="0"
              {...button}
              title={item.name}
              onClick={() => openSettings()}
            >
              <Icon name={item.icon} {...icon} />
            </button>
          </li>))
        }
      </ul>
    </nav>
  );
};

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
