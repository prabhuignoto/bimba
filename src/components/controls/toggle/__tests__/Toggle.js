import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import Toggle from '../index';

describe('Toggle', () => {
  it('render correctly', () => {
    const output = shallow(<Toggle toggleOn label="test" />);
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});
