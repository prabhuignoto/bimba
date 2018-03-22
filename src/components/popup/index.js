import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Style from './style';
import { withStyles } from '../../common/withStyles';
import { SpreadClassNames } from '../../common/helpers';

const Popup = (props) => {
  const { styles, open } = props;
  const {
    popup, popupWrapper, popupControls, ok, cancel,
  } = SpreadClassNames(styles);
  const content = (() => {
    if (open) {
      return (
        <div {...popup}>
          <div {...popupWrapper}>
            {props.children}
          </div>
          <div {...popupControls}>
            <button {...ok}>Ok</button>
            <button {...cancel}>Cancel</button>
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
};

Popup.propTypes = {
  open: PropTypes.bool.isRequired,
  styles: PropTypes.shape({
    popup: PropTypes.object.isRequired,
    popupWrapper: PropTypes.object.isRequired,
    popupControls: PropTypes.object.isRequired,
  }).isRequired,
};

export default withStyles(Style)(Popup);
