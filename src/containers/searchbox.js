import { connect } from 'react-redux';
import { handleSearch, selectSearchEngine } from '../actions/index';
import SearchBox from '../components/searchbox';

const mapDispatchToProps = dispatch => ({
  handleSearch: searchTerm => dispatch(handleSearch(searchTerm)),
  selectSearchEngine: engine => dispatch(selectSearchEngine(engine)),
});

const mapStateToProps = state => ({
  searchTerm: state.searchTerm,
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);
