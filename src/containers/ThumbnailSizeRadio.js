import { connect } from 'react-redux';
import Radio from '../components/controls/radio';
import { changeThumbnailSize } from '../actions';

// const mapStateToProps = state => ({
//   selected: state.thumbnailSize,
// });

const mapDispatchToProps = dispatch => ({
  handleChange: size => dispatch(changeThumbnailSize(size)),
});

export default connect(null, mapDispatchToProps)(Radio);
