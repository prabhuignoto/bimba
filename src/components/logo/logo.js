import React from 'react';
import PropTypes from 'prop-types';
import Styles from './styles';
import { withStyles } from '../../common/withStyles';

// todo refactor to use spread classNames
const Logo = ({ classes, image, text }) => {
  const imagePath = `/public/${image}.png`;
  const { logo, img, txt } = classes;

  return (
    <div className={logo}>
      <img src={imagePath} alt="app logo" className={img} />
      <span className={txt}>{text}</span>
    </div>);
};

Logo.propTypes = {
  text: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  classes: PropTypes.objectOf(PropTypes.string),
};

Logo.defaultProps = {
  classes: {},
};

export default withStyles(Styles)(Logo);
