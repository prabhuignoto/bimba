import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-fontawesome';
import Style from './style';
import { withStyles } from '../../common/withStyles';
import { SpreadClassNames } from '../../common/helpers';

class Popup extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillReceiveProps() {
  }

  render() {
    const { styles, isOpen } = this.props;
    const {
      popup, popupWrapper, popupControls, popupHeader, popupTitle, closeButton,
    } = SpreadClassNames(styles);
    const content = (() => {
      if (isOpen) {
        return (
          <div {...popup}>
            <div {...popupWrapper}>
              <header {...popupHeader}>
                <span {...popupTitle}>Popup</span>
                <button {...closeButton}>
                  <Icon name="times-circle" />
                </button>
              </header>
              {this.props.children}
              <div {...popupControls} />
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
};

export default withStyles(Style)(Popup);
