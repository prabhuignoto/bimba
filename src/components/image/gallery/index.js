import React from 'react';
import PropTypes from 'prop-types';
import Style from './style';
import { withStyles, css } from '../../../common/withStyles';
import Thumbnail from '../thumbnail';

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      items: nextProps.items,
      searchInProgress: nextProps.searchInProgress,
    });
  }

  render() {
    const { styles } = this.props;
    let galleryClass = null;
    if (this.state.searchInProgress) {
      galleryClass = css(styles.gallery, styles.searchInProgress);
    } else {
      galleryClass = css(styles.gallery);
    }
    return (
      <div {...galleryClass}>
        <div {...css(styles.galleryWrapper)}>
          {this.state.items.map((item) => {
            const props = Object.assign({}, item, {
              searchInProgress: this.state.searchInProgress,
            });
            return <Thumbnail {...props} />;
          })}
        </div>
      </div>
    );
  }
}

Gallery.propTypes = {
  styles: PropTypes.shape({
    gallery: PropTypes.object,
    galleryWrapper: PropTypes.object,
  }).isRequired,
  items: PropTypes.arrayOf(PropTypes.object),
  searchInProgress: PropTypes.bool,
};

Gallery.defaultProps = {
  items: [],
  searchInProgress: false,
};

export default withStyles(Style)(Gallery);
