import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-ionicons';
import { withStyles, css } from '../../common/withStyles';
import Toggle from '../controls/toggle';
import Radio from '../controls/radio';
import Dropdown from '../dropdown';
import Style from './style';

class Options extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: this.props.show,
    };
    this.optionRef = React.createRef();
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.show !== nextProps.show) {
      this.setState({
        show: nextProps.show,
      });
    }
  }

  componentDidUpdate() {
    this.optionRef.current.focus();
  }

  render() {
    const { styles } = this.props;
    let openClass = null;
    let screen = null;
    if (this.state.show) {
      openClass = css(styles.options, styles.open);
      screen = <div {...css(styles.screen)} />;
    } else {
      openClass = css(styles.options, styles.close);
    }
    return (
      <div
        {...openClass}
        tabIndex="-1"
        role="dialog"
        ref={this.optionRef}
        onKeyUp={(ev) => {
          if (ev.which === 27) {
            this.props.closeOptions();
          }
        }}
      >
        {screen}
        <div {...css(styles.optionsWrapper)}>
          <header {...css(styles.header)}>
            <h2 {...css(styles.h2)}>
              Options
            </h2>
            <button
              {...css(styles.btnClose)}
              onClick={() => {
              this.props.closeOptions();
              }}
            >
              <Icon icon="md-close" color="#fff" />
            </button>
          </header>
          <table {...css(styles.table)}>
            <tr {...css(styles.row)}>
              <td {...css(styles.column)} style={{ width: '25%', paddingLeft: '20px' }}>
                <Toggle label="Safe Search" onChange={this.props.toggleSafeSearch} />
              </td>
              <td {...css(styles.column)} style={{ width: '32%' }}>
                <Dropdown
                  items={['Photo', 'AnimatedGif']}
                  label="Type"
                  onChange={this.props.changeImageType}
                />
              </td>
              <td {...css(styles.column)} style={{ width: '32%' }}>
                <Dropdown
                  items={['Day', 'Week', 'Month']}
                  label="Fresh"
                  onChange={this.props.changeFreshness}
                />
              </td>
            </tr>
            <tr {...css(styles.row)}>
              <td style={{ width: '100%' }} colSpan="3">
                <table {...css(styles.table2)}>
                  <tr {...css(styles.row)}>
                    <td {...css(styles.column)} style={{ width: '35%' }}>
                      <Dropdown
                        items={['Small', 'Medium', 'Large', 'Wallpaper', 'All']}
                        label="Size"
                        onChange={this.props.changeSize}
                      />
                    </td>
                    <td style={{ width: '15%' }} />
                    <td {...css(styles.column)} style={{ width: '50%' }}>
                      <Radio
                        name="content_type"
                        label="Content type"
                        items={[
                          {
                            name: 'face',
                            label: 'Face',
                          },
                          {
                            name: 'potrait',
                            label: 'Potrait',
                          },
                        ]}
                      />
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </div>
      </div>
    );
  }
}

Options.propTypes = {
  show: PropTypes.bool,
  changeSize: PropTypes.func.isRequired,
  changeImageType: PropTypes.func.isRequired,
  changeFreshness: PropTypes.func.isRequired,
  toggleSafeSearch: PropTypes.func.isRequired,
  closeOptions: PropTypes.func.isRequired,
  styles: PropTypes.shape({
    options: PropTypes.object,
    optionsWrapper: PropTypes.object,
  }).isRequired,
};

Options.defaultProps = {
  show: false,
};

export default withStyles(Style)(Options);
