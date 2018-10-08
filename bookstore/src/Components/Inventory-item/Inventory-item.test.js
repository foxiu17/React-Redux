import React from 'react';
import ReactDOM from 'react-dom';
import InventoryItem from './Inventory-item';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Inventory-item tests: ', () => {
  it('Inventory-item renders without problems', () => {
    const div = document.createElement('div');
    ReactDOM.render(<InventoryItem />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('Snapshot matches', () => {
    const wrapper = shallow(<InventoryItem />);
    expect(wrapper).toMatchSnapshot();
  });
})