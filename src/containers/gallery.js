import { connect } from 'react-redux';
import Gallery from '../components/image/gallery';

const mapStateToProps = state => ({
  items: state.results,
  searchInProgress: state.searchInProgress,
});

export default connect(mapStateToProps, null)(Gallery);
