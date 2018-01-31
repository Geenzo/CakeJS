import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import EditCakes from '../components/editcakes.js';
import { shallow, mount, render } from "enzyme";
import styles from '../App.css'


test('Check that Edit Button has rendered', () => {
  const wrapper = shallow(
    <EditCakes />
  );
  expect(wrapper.find("button").exists()).toBe(true);
});

test('Check that input form has not been rendered before Add button has been clicked', () => {
  const wrapper = shallow(
    <EditCakes />
  );
  expect(wrapper.find("Inputform").exists()).toBe(false);
});

test('Check that Error message had not been rendered', () => {
  const wrapper = shallow(
    <EditCakes />
  );
  expect(wrapper.find("ErrorField").exists()).toBe(false);
});


test('Check that clicking Edit Button renders input form', () => {
  const wrapper = shallow(
    <EditCakes />
  );
  expect(wrapper.find("button").exists()).toBe(true);

  wrapper.find("button").simulate("click");

  expect(wrapper.find("InputForm").exists()).toBe(true);
});
