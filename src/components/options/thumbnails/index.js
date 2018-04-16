import React, { Component } from 'react';
import Radio from '../../controls/radio';
import PopDown from '../../controls/popdown';

class ThumbnailOptions extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <PopDown>
          <Radio items={[
            {
              name: 'test',
              label: 'test',
            },
          ]}
          />
        </PopDown>
      </div>
    );
  }
}

export default ThumbnailOptions;
