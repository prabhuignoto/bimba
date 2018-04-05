import { connect } from 'react-redux';
import Gallery from '../components/image/gallery';

const mapStateToProps = state => ({
  items: state.Search.results,
  searchInProgress: state.Search.searchInProgress,
});

export default connect(mapStateToProps, null)(Gallery);
