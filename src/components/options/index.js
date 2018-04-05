import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, css } from '../../common/withStyles';
import Toggle from '../controls/toggle';
import Radio from '../controls/radio';
import ThumbnailSizeRadio from '../../containers/ThumbnailSizeRadio';
import Style from './style';

class Options extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openOptions: this.props.openOptions,
    };
  }

  render() {
    const { styles } = this.props;
    let openClass = null;
    if (this.state.openOptions) {
      openClass = css(styles.options, styles.optionsOpen);
    } else {
      openClass = css(styles.options);
    }
    return (
      <div {...openClass}>
        <div {...css(styles.optionsWrapper)}>
          <Toggle label="Safe Search" />
          <Radio
            name="quality"
            label="Quality"
            items={[
            {
              label: 'High',
              value: 'high',
            },
            {
              label: 'Medium',
              value: 'medium',
            },
            {
              label: 'Low',
              value: 'low',
            },
          ]}
          />
          <ThumbnailSizeRadio
            name="thumbnailSize"
            label="Thumbnails"
            items={[
            {
              label: '1x',
              value: '1x',
            },
            {
              label: '2x',
              value: '2x',
            },
            {
              label: '3x',
              value: '3x',
            },
          ]}
          />
          <Radio
            name="type"
            label="Type"
            items={[
            {
              label: 'Photo',
              value: 'photo',
            },
            {
              label: 'GIF',
              value: 'gif',
            }
          ]}
          />
        </div>
      </div>
    );
  }
}

Options.propTypes = {
  openOptions: PropTypes.bool,
  styles: PropTypes.shape({
    options: PropTypes.object,
    optionsWrapper: PropTypes.object,
  }).isRequired,
};

Options.defaultProps = {
  openOptions: false,
};

export default withStyles(Style)(Options);
