import React from 'react';
import ReactDOM from 'react-dom';
import OrderItem from './Order-item';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Order-item tests: ', () => {

  it('Snapshot matches', () => {
    const book =  {
      name: "Book title",
    }
    const wrapper = shallow(<OrderItem book{...book} />);
    expect(wrapper).toMatchSnapshot();
  });

  // it('Props check', () => {
  //   const book =  {
  //     name: "Book title",
  //   }
  //   const wrapper = shallow(<OrderItem book{...book} />);
  //   expect(wrapper.find('.order-item').find('.title').text()).toBe(book.name);
  // });
})