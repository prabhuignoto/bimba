import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '../../../common/withStyles';
import { SpreadClassNames } from '../../../common/helpers';
import Style from './style';

const Thumbnail = (props) => {
  const { styles, searchInProgress } = props;
  let { thumbnailURL } = props;
  const { thumbnail, thumbnailWrapper, img } = SpreadClassNames(styles);
  if (searchInProgress) {
    thumbnailURL = '/images/oval.svg';
  }
  return (
    <div {...thumbnail}>
      <div {...thumbnailWrapper}>
        <img src={thumbnailURL} alt="thumbnail" {...img} />
      </div>
    </div>
  );
};

Thumbnail.propTypes = {
  styles: PropTypes.shape({
    thumbnail: PropTypes.object,
    thumbnailWrapper: PropTypes.object,
  }).isRequired,
  thumbnailURL: PropTypes.string.isRequired,
  searchInProgress: PropTypes.bool.isRequired,
  // thumbnailSize: PropTypes.shape({
  //   height: PropTypes.number.isRequired,
  //   width: PropTypes.number.isRequired,
  // }).isRequired,
};

export default withStyles(Style)(Thumbnail);
