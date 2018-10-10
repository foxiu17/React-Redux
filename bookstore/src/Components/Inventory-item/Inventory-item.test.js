import React from 'react';
import ReactDOM from 'react-dom';
import InventoryItem from './Inventory-item';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Inventory-item tests: ', () => {

  it('Snapshot matches', () => {
    const book = {
      name: "Book title",
      image: './Images/Wilki.jpg'
    }
    const wrapper = shallow(<InventoryItem book={book}/>);
    expect(wrapper).toMatchSnapshot();
  });
})