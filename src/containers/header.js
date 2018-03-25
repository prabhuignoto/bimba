import { connect } from 'react-redux';
import Header from '../components/header';
import { selectSearchEngine, openSettings, closeSettings } from '../actions';

const mapStateToProps = state => ({
  engine: state.engine,
  isOpen: state.settingsOpen,
});

const mapDispatchToProps = dispatch => ({
  selectSearchEngine: engine => dispatch(selectSearchEngine(engine)),
  openSettings: () => dispatch(openSettings()),
  closeSettings: () => dispatch(closeSettings()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
