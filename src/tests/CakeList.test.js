import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import CakeList from '../components/cakelist.js';
import Header from '../components/header.js';
import { shallow, mount, render } from "enzyme";


test('Check that CakeList componentDidMount is being called', () => {
  let spy = jest.spyOn(CakeList.prototype, 'componentDidMount');
  const wrapper = mount(<CakeList />);
  wrapper.instance().componentDidMount();
  expect(spy).toHaveBeenCalled();
});

test('Initial Loading h2 should be on the page before fetching cake list', () => {
  const component = shallow(<CakeList />);
  expect(component.find('h2').text()).toEqual('Loading...');
});
