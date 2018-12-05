import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Component from './';

describe('Search component', () => {
  test('renders a search input', () => {
    const wrapper = shallow(
      <Component />
    );

    expect(wrapper.find(`.search`).exists()).toBe(true);
  });
});