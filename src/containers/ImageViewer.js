import { connect } from 'react-redux';
import Viewer from '../components/image/viewer';

const mapStateToProps = state => ({
  activeImage: state.activeImage,
});

export default connect(mapStateToProps, null)(Viewer);
