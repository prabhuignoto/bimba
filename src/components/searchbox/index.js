import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-fontawesome';
import Styles from './styles';
import Dropdown from '../dropdown';
import { withStyles } from '../../common/withStyles';
import { SpreadClassNames } from '../../common/helpers';

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
    const { styles, engine, selectSearchEngine } = this.props;
    const {
      search, input, button, icon,
    } = SpreadClassNames(styles);
    const placeHolder = `Image search powered by ${this.state.selectedValue}`;
    return (
      <div {...search}>
        <Dropdown
          handleOpen={this.toggleMenu}
          handleSelection={selectSearchEngine}
          selectedValue={this.state.selectedValue}
          open={this.state.dropDownOpen}
          items={['google', 'bing']}
        />
        <input type="search" {...input} placeholder={placeHolder} />
        <button {...button}>
          <Icon name="arrow-right" {...icon} />
        </button>
      </div>
    );
  }
}

SearchBox.propTypes = {
  engine: PropTypes.string.isRequired,
  selectSearchEngine: PropTypes.func.isRequired,
};

export default withStyles(Styles)(SearchBox);
