import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-fontawesome';
import Style from './style';
import { withStyles, css } from '../../common/withStyles';

class Popup extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillReceiveProps() {
  }

  render() {
    const { styles, isOpen } = this.props;
    const content = (() => {
      if (isOpen) {
        return (
          <div {...css(styles.popup)}>
            <div {...css(styles.popupWrapper)}>
              <header {...css(styles.popupHeader)}>
                <span {...css(styles.popupTitle)}>Popup</span>
                <button {...css(styles.closeButton)}>
                  <Icon name="times-circle" />
                </button>
              </header>
              {this.props.children}
              <div {...css(styles.popupControls)} />
            </div>
          </div>
        );
      }
      return null;
    })();
    return (
      <Fragment>
        {content}
      </Fragment>
    );
  }
}

Popup.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closePopup: PropTypes.func.isRequired,
  styles: PropTypes.shape({
    popup: PropTypes.object.isRequired,
    popupWrapper: PropTypes.object.isRequired,
    popupControls: PropTypes.object.isRequired,
  }).isRequired,
  children: PropTypes.node,
};

Popup.defaultProps = {
  children: [],
};

export default withStyles(Style)(Popup);
