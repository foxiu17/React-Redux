import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { configure } from 'enzyme';
import Adapter from ''

it('App renders without problems', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});