import React from 'react';
import PropTypes from 'prop-types';
import Styles from './styles';
import { withStyles, css } from '../../common/withStyles';

// TODO:10 refactor to use spread classNames
const Logo = ({ styles, image, text }) => {
  const imagePath = `/public/${image}.png`;
  const { logo, img, txt } = styles;

  return (
    <div {...css(logo)}>
      {/*}<img src={imagePath} alt="app logo" className={img} />*/}
      <span {...css(txt)}>{text}</span>
    </div>);
};

Logo.propTypes = {
  text: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  classes: PropTypes.objectOf(PropTypes.string),
};

// TODO:0 configure propTypes
Logo.defaultProps = {
  classes: {},
};

export default withStyles(Styles)(Logo);
