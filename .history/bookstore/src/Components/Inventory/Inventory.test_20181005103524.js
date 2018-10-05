import React from 'react';
import ReactDOM from 'react-dom';
import  from './';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe(' tests: ', () => {
  it(' renders without problems', () => {
    const div = document.createElement('div');
    ReactDOM.render(< />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it(' hello world', () => {
    const wrapper = shallow(< />);
    expect(wrapper.find('h1').text()).toBe('Hello World');
  })
})