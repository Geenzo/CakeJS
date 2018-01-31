import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import CakeList from '../components/cakelist.js';
import AddCakes from '../components/addcakes.js';
import EditCakes from '../components/editcakes.js';
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

test('renders AddCakes component successfully', () => {
  const div = document.createElement('div');
  ReactDOM.render( < AddCakes / > , div);
  ReactDOM.unmountComponentAtNode(div);
})

test('renders EditCakes component successfully', () => {
  const div = document.createElement('div');
  ReactDOM.render( < EditCakes / > , div);
  ReactDOM.unmountComponentAtNode(div);
})
