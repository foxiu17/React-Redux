import React from 'react';
import ReactDOM from 'react-dom';
import AdminPanel './AdminPanel';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe(' tests: ', () => {
  it(' renders without problems', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AdminPanel />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it(' hello world', () => {
    const app = shallow(<App />);
    expect(app.find('h1').text()).toBe('My App');
  })
})