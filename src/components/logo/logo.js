import React from 'react';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';
import Styles from './logo-styles';

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

export default injectSheet(Styles)(Logo);
