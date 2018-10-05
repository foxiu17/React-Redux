import React from 'react';
import ReactDOM from 'react-dom';
import AdminPanel './AdminPanel';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('AdminPanel tests: ', () => {
  it('AdminPanel renders without problems', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AdminPanel />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('AdminPanel hello world', () => {
    const wrapper = shallow(<AdminPanel />);
    expect(app.find('h1').text()).toBe('My App');
  })
})