import { connect } from 'react-redux';
import Thumbnail from '../components/image/thumbnail';
import { clickThumbnail } from '../actions';

const mapStateToProps = state => ({
  size: state.Thumbnail.size,
});

const mapDispatchToProps = dispatch => ({
  clickThumbnail: image => dispatch(clickThumbnail(image)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Thumbnail);
