import { connect } from 'react-redux';
import { handleSearch, selectSearchEngine } from '../actions/index';
import SearchBox from '../components/searchbox';

const mapDispatchToProps = dispatch => ({
  handleSearch: (searchTerm, safeSearch, imageType, freshness, size) => (
    dispatch(handleSearch(searchTerm, safeSearch, imageType, freshness, size))
  ),
  selectSearchEngine: engine => dispatch(selectSearchEngine(engine)),
});
const mapStateToProps = state => ({
  searchTerm: state.searchTerm,
  safeSearch: state.Query.safeSearch,
  size: state.Query.size,
  imageType: state.Query.imageType,
  freshness: state.Query.freshness,
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);
