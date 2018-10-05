import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('App tests: ', () => {
  it('App renders without problems', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('App hello world', )
})

