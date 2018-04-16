import React from 'react';
import PropTypes from 'prop-types';
import Style from './style';
import { withStyles, css } from '../../../common/withStyles';

const PopDown = ({ styles, children }) => (
  <div {...css(styles.popdown)}>
    <span {...css(styles.label)} />
    <span {...css(styles.icon)} />
    <div {...css(styles.wrapper)}>
      {children}
    </div>
  </div>
);

PopDown.propTypes = {
  styles: PropTypes.shape({
    popdown: PropTypes.object,
    label: PropTypes.object,
  }).isRequired,
  children: PropTypes.node.isRequired,
};

export default withStyles(Style)(PopDown);
