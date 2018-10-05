import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Header tests: ', () => {
  it('Header renders without problems', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Header />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('Header - title changes', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('h1').text()).toBe('Bad books');
    wrapper.setState({
      bookstoreName : 'Good books'
    });
    expect(wrapper.find('h1').text()).toBe('Good books');
  });

  it('Header - changes after click', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.state().bookstoreName).toBe('Bad books');
    wrapper.find('.header').simulate('click');
    expect(wrapper.state().bookstoreName).toBe('Good books');
  });

  it('Snapshot matches', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
  })
})