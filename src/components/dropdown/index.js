import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-fontawesome';
import Style from './styles';
import { withStyles, css } from '../../common/withStyles';


class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      label: props.label,
    };
    this.handleOpen = this.handleOpen.bind(this);
  }

  handleOpen() {
    this.setState({
      open: !this.state.open,
    });
  }

  handleSelection(value) {
    this.setState({
      selectedValue: value,
    });
    if (this.props.onChange) {
      this.props.onChange(value);
    }
  }

  render() {
    let menu = null;
    const {
      styles, items, label,
    } = this.props;

    if (this.state.open === true) {
      menu = () => (
        <ol
          {...css(styles.list)}
          role="menu"
          tabIndex="0"
        >
          {items.map(item => (
            <li
              {...css(styles.listItem)}
              role="menuitem"
              onClick={() => {
                this.handleSelection(item);
              }}
              onKeyPress={(ev) => {
                if (ev.which === 13) {
                  this.handleSelection(item);
                }
              }}
              key={item}
            >
              {item}
            </li>))}
        </ol>
      );
    }
    return (
      <div
        role="button"
        {...css(styles.dropdown)}
        tabIndex="0"
        onClick={this.handleOpen}
        onKeyUp={(ev) => {
            if (ev.which === '13') {
              this.handleOpen();
            }
          }
        }
      >
        <div {...css(styles.label)}>{label}</div>
        <div {...css(styles.content)}>
          <span {...css(styles.selectedValue)}>{this.state.selectedValue}</span>
          <div {...css(styles.icon)}>
            <Icon name="angle-down" />
          </div>
          {typeof menu === 'function' ? menu() : null}
        </div>
      </div>
    );
  }
}


Dropdown.propTypes = {
  label: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.string),
  onChange: PropTypes.func.isRequired,
  styles: PropTypes.shape({
    dropdown: PropTypes.object,
    label: PropTypes.object,
    list: PropTypes.object,
    listItem: PropTypes.object,
    icon: PropTypes.object,
    selectedText: PropTypes.object,
  }).isRequired,
};

Dropdown.defaultProps = {
  items: [],
  label: '',
};

export default withStyles(Style)(Dropdown);
