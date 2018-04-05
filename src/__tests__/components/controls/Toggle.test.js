import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import Toggle from '../../../components/controls/toggle';

describe('Toggle', () => {
  it('render correctly', () => {
    const output = shallow(<Toggle toggleOn label="test" />);
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});
