import React from 'react';
import ReactDOM from 'react-dom';
import Inventory from './Inventory';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Inventory tests: ', () => {
  it('Inventory renders without problems', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Inventory />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('Inventory hello world', () => {
    const wrapper = shallow(<Inventory />);
    expect(wrapper.find('h1').text()).toBe('Hello World');
  })
})