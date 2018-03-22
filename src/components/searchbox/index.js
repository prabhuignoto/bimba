import React from 'react';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';
import Ionicon from 'react-ionicons';
import Styles from './styles';
import Dropdown from '../dropdown';

class SearchBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropDownOpen: false,
      selectedValue: '',
    };
    this.toggleMenu = this.toggleMenu.bind(this);
    this.handleSelection = this.handleSelection.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.engine !== this.state.selectedValue) {
      this.setState({
        selectedValue: nextProps.engine,
      });
    }
  }

  toggleMenu() {
    this.setState({
      dropDownOpen: !this.state.dropDownOpen,
    });
  }

  handleSelection(val) {
    this.setState({
      selectedValue: val,
    });
  }

  render() {
    const { classes, engine, selectSearchEngine } = this.props;
    const { search, input, button } = classes;
    const placeHolder = `Image search powered by ${this.state.selectedValue}`;
    return (
      <div className={search}>
        <Dropdown
          handleOpen={this.toggleMenu}
          handleSelection={selectSearchEngine}
          selectedValue={this.state.selectedValue}
          open={this.state.dropDownOpen}
          items={['google', 'bing']}
        />
        <input type="search" className={input} placeholder={placeHolder} />
        <button className={button}>
          <Ionicon icon="md-arrow-round-forward" />
        </button>
      </div>
    );
  }
}

SearchBox.propTypes = {
  engine: PropTypes.string.isRequired,
  selectSearchEngine: PropTypes.func.isRequired,
};

export default injectSheet(Styles)(SearchBox);
