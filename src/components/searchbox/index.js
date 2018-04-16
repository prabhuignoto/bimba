import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-ionicons';
import Styles from './styles';
import { withStyles, css } from '../../common/withStyles';
import Toolbar from '../../components/toolbar';
import Options from '../../containers/options';

class SearchBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showOptions: false,
      selectedValue: '',
      imageType: props.imageType,
      freshness: props.freshness,
      size: props.size,
      safeSearch: props.safeSearch,
    };
    this.toggleOptions = this.toggleOptions.bind(this);
    this.handleSelection = this.handleSelection.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      imageType: nextProps.imageType,
      freshness: nextProps.freshness,
      size: nextProps.size,
      safeSearch: nextProps.safeSearch,
    });
  }

  toggleOptions() {
    this.setState({
      showOptions: !this.state.showOptions,
    });
  }

  handleSelection(val) {
    this.setState({
      selectedValue: val,
    });
  }

  handleSearch(ev) {
    if (ev.which === 13) {
      const { target: { value: text } } = ev;
      const {
        imageType, freshness, size, safeSearch,
      } = this.state;
      this.props.handleSearch(text, safeSearch, imageType, freshness, size);
      if (this.state.showOptions) {
        this.setState({
          showOptions: false,
        });
      }
    }
  }

  render() {
    const { styles, engine, selectSearchEngine } = this.props;
    const placeHolder = `Image search powered by ${this.state.selectedValue}`;
    const titleText = `Searching for ${this.state.imageType},with size ${this.state.size}`;
    return (
      <div {...css(styles.search)}>
        <input
          type="text"
          {...css(styles.input)}
          placeholder={placeHolder}
          onKeyPress={this.handleSearch}
          title={titleText}
        />
        <button {...css(styles.button, styles.cog)} onClick={this.toggleOptions}>
          <Icon icon="md-settings" color="#0a2231" fontSize="1em" />
        </button>
        <Options show={this.state.showOptions} closeOptions={this.toggleOptions} />
      </div>
    );
  }
}

SearchBox.propTypes = {
  engine: PropTypes.string.isRequired,
  selectSearchEngine: PropTypes.func.isRequired,
  handleSearch: PropTypes.func.isRequired,
  imageType: PropTypes.string,
  size: PropTypes.string,
  freshness: PropTypes.string,
  safeSearch: PropTypes.bool,
};

export default withStyles(Styles)(SearchBox);
