import React from 'react';
import PropTypes from 'prop-types';
import Logo from '../logo/logo';
import Toolbar from '../toolbar';
import SearchBox from '../../containers/searchbox';
import Popup from '../../containers/settings-popup';
import { withStyles, css } from '../../common/withStyles';
import HeaderStyles from './styles';

const Header = ({
  styles, engine, selectSearchEngine, settingsOpen, openSettings,
}) => {
  return (
    <header {...css(styles.appHeader)}>
      <div {...css(styles.logoWrapper)}>
        <Logo text="Bimba" image="" />
      </div>
      <SearchBox selectSearchEngine={selectSearchEngine} engine={engine} />
      <Popup isOpen={settingsOpen} />
    </header>);
};

Header.propTypes = {
  engine: PropTypes.string.isRequired,
  settingsOpen: PropTypes.bool.isRequired,
  openSettings: PropTypes.func.isRequired,
  selectSearchEngine: PropTypes.func.isRequired,
  styles: PropTypes.shape({
    appHeader: PropTypes.object.isRequired,
  }).isRequired,
};

export default withStyles(HeaderStyles)(Header);
