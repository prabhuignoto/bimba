import { connect } from 'react-redux';
import {
  changeSize,
  changeImagetype,
  changeFreshness,
  toggleSafeSearch,
} from '../../actions';
import Options from '../../components/options';

const mapDispatchToProps = dispatch => ({
  changeSize: size => dispatch(changeSize(size)),
  changeImageType: type => dispatch(changeImagetype(type)),
  changeFreshness: freshness => dispatch(changeFreshness(freshness)),
  toggleSafeSearch: mode => dispatch(toggleSafeSearch(mode)),
});

export default connect(null, mapDispatchToProps)(Options);
