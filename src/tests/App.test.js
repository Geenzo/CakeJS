import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import CakeList from '../components/cakelist.js';
import Header from '../components/header.js';
import { shallow, mount, render } from "enzyme";


test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render( < App / > , div);
  ReactDOM.unmountComponentAtNode(div);
});

test('renders Cakelist component successfully', () => {
  const div = document.createElement('div');
  ReactDOM.render( < CakeList / > , div);
  ReactDOM.unmountComponentAtNode(div);
})

test('renders Header component successfully', () => {
  const div = document.createElement('div');
  ReactDOM.render( < Header / > , div);
  ReactDOM.unmountComponentAtNode(div);
})
