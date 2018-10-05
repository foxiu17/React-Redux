import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('App tests: ', () => {
  it('App renders without problems', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('Components', () => {
    const app = shallow(<App />);
    // console.log(app.debug());
    expect(app.find('Header').exists()).toBe(true);
    expect(app.find('Order').exists()).toBe(true);
    expect(app.find('Inventory').exists()).toBe(true);
    expect(app.find('AdminPanel').exists()).toBe(true);
  })
})

