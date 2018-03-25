import React from 'react';
import PropTypes from 'prop-types';
import Logo from '../logo/logo';
import Toolbar from '../toolbar';
import SearchBox from '../../components/searchbox';
import Popup from '../../containers/settingsPopup';
import { withStyles } from '../../common/withStyles';
import { SpreadClassNames } from '../../common/helpers';
import HeaderStyles from './styles';

const Header = ({
  styles, engine, selectSearchEngine, settingsOpen, openSettings,
}) => {
  const { appHeader } = SpreadClassNames(styles);
  return (
    <header {...appHeader}>
      <Logo text="Bimba" image="logo" />
      <SearchBox selectSearchEngine={selectSearchEngine} engine={engine} />
      <Toolbar items={[{ name: 'settings', icon: 'cog' }]} openSettings={openSettings} />
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
