import { connect } from 'react-redux';
import { selectSearchEngine } from '../actions';
import SearchBox from '../components/searchbox';

const mapDispatchToProps = dispatch => ({
  selectSearchEngine: engine => dispatch(selectSearchEngine(engine)),
});

const mapStateToProps = state => ({ engine: state.engine });

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);
