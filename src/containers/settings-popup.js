import { connect } from 'react-redux';
import { closeSettings } from '../actions';
import Popup from '../components/popup';

const mapStateToProps = state => ({
  isOpen: state.settingsOpen,
});

const mapToDispatchProps = dispatch => ({
  closePopup: () => dispatch(closeSettings()),
});

export default connect(mapStateToProps, mapToDispatchProps)(Popup);
