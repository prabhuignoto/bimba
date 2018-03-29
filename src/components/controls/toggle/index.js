import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, css } from '../../../common/withStyles';
import Style from './style';


class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleOn: props.toggleOn,
    };
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle() {
    this.setState({
      toggleOn: !this.state.toggleOn,
    });
  }

  render() {
    let { toggleButton, toggleWrapper } = [null, null];
    const { styles } = this.props;
    if (this.state.toggleOn === true) {
      toggleButton = css(styles.toggleButton, styles.buttonOn);
      toggleWrapper = css(styles.toggleWrapper, styles.wrapperOn);
    } else {
      toggleButton = css(styles.toggleButton, styles.buttonOff);
      toggleWrapper = css(styles.toggleWrapper, styles.wrapperOff);
    }
    return (
      <div {...css(styles.toggle)} onClick={this.handleToggle}>
        <div {...toggleWrapper}>
          <button {...toggleButton} />
        </div>
      </div>
    );
  }
}

Toggle.propTypes = {
  styles: PropTypes.shape({
    toggle: PropTypes.object,
    toggleWrapper: PropTypes.object,
    button: PropTypes.object,
  }).isRequired,
  toggleOn: PropTypes.bool,
};

Toggle.defaultProps = {
  toggleOn: false,
};

export default withStyles(Style)(Toggle);
