import React from 'react';
import ReactDOM from 'react-dom';
import AdminPanel './AdminPanel';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('App tests: ', () => {
  it('App renders without problems', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('App hello world', () => {
    const app = shallow(<App />);
    expect(app.find('h1').text()).toBe('My App');
  })
})