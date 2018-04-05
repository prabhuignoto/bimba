import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, css } from '../../../common/withStyles';
import Style from './style';

class Viewer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { contentURL } = this.props.activeImage;
    const { styles } = this.props;
    return (
      <div {...css(styles.viewer)}>
        <div {...css(styles.wrapper)}>
          <img src={contentURL} alt="" />
        </div>
      </div>
    );
  }
}

Viewer.propTypes = {
  activeImage: PropTypes.shape({
    thumbnailURL: PropTypes.string.isRequired,
    contentURL: PropTypes.string.isRequired,
  }),
};

Viewer.defaultProps = {
  activeImage: {},
};

export default withStyles(Style)(Viewer);
