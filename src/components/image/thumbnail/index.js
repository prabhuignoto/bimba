import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, css } from '../../../common/withStyles';
import Style from './style';

class Thumbnail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      size: props.size,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.size !== nextProps.size) {
      this.setState({
        size: nextProps.size,
      });
    }
  }

  render() {
    const { styles, searchInProgress } = this.props;
    let { thumbnailURL, contentURL } = this.props;
    let thumbnail = null;
    if (searchInProgress) {
      thumbnailURL = '/images/oval.svg';
    }
    if (this.state.size === '1x') {
      thumbnail = css(styles.thumbnail, styles.x1);
    } else if (this.state.size === '2x') {
      thumbnail = css(styles.thumbnail, styles.x2);
    } else if (this.state.size === '3x') {
      thumbnail = css(styles.thumbnail, styles.x3);
    }
    return (
      <div
        {...thumbnail}
        onClick={() => {
         this.props.clickThumbnail({
           thumbnailURL,
           contentURL,
         });
        }
       }
        onKeyPress={(ev) => {
         if (ev.which === 13) {
           this.props.clickThumbnail({
             thumbnailURL,
             contentURL,
           });
         }
       }}
        tabIndex="0"
        role="button"
      >
        <div {...css(styles.thumbnailWrapper)}>
          <img src={thumbnailURL} alt="thumbnail" {...css(styles.img)} />
        </div>
      </div>
    );
  }
}

Thumbnail.propTypes = {
  styles: PropTypes.shape({
    thumbnail: PropTypes.object,
    thumbnailWrapper: PropTypes.object,
  }).isRequired,
  thumbnailURL: PropTypes.string.isRequired,
  searchInProgress: PropTypes.bool.isRequired,
  size: PropTypes.string,
  clickThumbnail: PropTypes.func.isRequired,
};

Thumbnail.defaultProps = {
  size: '1x',
};

export default withStyles(Style)(Thumbnail);
