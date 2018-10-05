import React from 'react';
import reactDOM from 'react-dom';
import App from './App';

it('App renders without problems', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
})