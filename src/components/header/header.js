import React from 'react';
import injectSheet from 'react-jss';
import Logo from '../logo/logo';
import Toolbar from './toolbar';
import SearchBox from '../../containers/searchbox';
import HeaderStyles from './header-styles';

type Props = {
  classes: string
};

const Header = ({ classes, engine, selectSearchEngine }: Props) => (
  <header className={classes.appHeader}>
    <Logo text="Bimba" image="logo" />
    <SearchBox selectSearchEngine engine />
    <Toolbar />
  </header>
);

export default injectSheet(HeaderStyles)(Header);
