import ThemedStyleSheet from 'react-with-styles/lib/ThemedStyleSheet';
import { css, withStyles } from 'react-with-styles';
import aphroditeInterface from 'react-with-styles-interface-aphrodite';
import Theme from '../themes/theme1';

ThemedStyleSheet.registerTheme(Theme);
ThemedStyleSheet.registerInterface(aphroditeInterface);

export {
  css,
  withStyles,
};
