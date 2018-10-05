import React from 'react';
import ReactDOM from 'react-dom';
import Order from './Order';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Order tests: ', () => {
  it('Order renders without problems', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Order />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('Order hello world', () => {
    const wrapper = shallow(<Order />);
    expect(wrapper.find('h1').text()).toBe('Hello World');
  })
})