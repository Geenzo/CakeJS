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

test('Check that cake list is populated when there are cakes available', () => {

  const component = mount(<CakeList />);
  component.setState({
    cakes:
      [{
        "desc": "A cheesecake made of lemon",
        "image": "https://s3-eu-west-1.amazonaws.com/s3.mediafileserver.co.uk/carnation/WebFiles/RecipeImages/lemoncheesecake_lg.jpg",
        "title": "Lemon cheesecake"
      }]
  });

  expect(component.find('.Cake').exists()).toBe(true);
});

test('Check that search successfully filters results', () => {
  const component = mount(<CakeList />);
  component.setState({
    cakes:
      [{
        "desc": "A cheesecake made of lemon",
        "image": "https://s3-eu-west-1.amazonaws.com/s3.mediafileserver.co.uk/carnation/WebFiles/RecipeImages/lemoncheesecake_lg.jpg",
        "title": "Lemon cheesecake"
      },
      {
        "desc": "A cake made of sponge",
        "image": "https://s3-eu-west-1.amazonaws.com/s3.mediafileserver.co.uk/carnation/WebFiles/RecipeImages/lemoncheesecake_lg.jpg",
        "title": "Sponge cake"
      }]
  });

  expect(component.find('.Cake').length).toBe(2)
  component.find('input').simulate('change', {target: {value: 'Le'}})
  expect(component.find('.Cake').length).toBe(1)
});

test('Check that myCallbackForChild function works correctly', () => {
  const component = mount(<CakeList />);
  component.setState({
    cakes:
      [{
        "desc": "A cheesecake made of lemon",
        "image": "https://s3-eu-west-1.amazonaws.com/s3.mediafileserver.co.uk/carnation/WebFiles/RecipeImages/lemoncheesecake_lg.jpg",
        "title": "Lemon cheesecake"
      },
      {
        "desc": "A cake made of sponge",
        "image": "https://s3-eu-west-1.amazonaws.com/s3.mediafileserver.co.uk/carnation/WebFiles/RecipeImages/lemoncheesecake_lg.jpg",
        "title": "Sponge cake"
      }]
  });

  let capturedFields = {
    "desc": "This is a new cake",
    "image": "https://s3-eu-west-1.amazonaws.com/s3.mediafileserver.co.uk/carnation/WebFiles/RecipeImages/lemoncheesecake_lg.jpg",
    "title": "New cake"
  }

  expect(component.state().cakes.length).toBe(2)
  component.instance().myCallbackForChild(capturedFields)
  expect(component.state().cakes.length).toBe(3)

});

test('Check that editCakeCallBack function works correctly', () => {
  const component = mount(<CakeList />);
  component.setState({
    cakes:
      [{
        "desc": "A cheesecake made of lemon",
        "image": "https://s3-eu-west-1.amazonaws.com/s3.mediafileserver.co.uk/carnation/WebFiles/RecipeImages/lemoncheesecake_lg.jpg",
        "title": "Lemon cheesecake"
      },
      {
        "desc": "A cake made of sponge",
        "image": "https://s3-eu-west-1.amazonaws.com/s3.mediafileserver.co.uk/carnation/WebFiles/RecipeImages/lemoncheesecake_lg.jpg",
        "title": "Sponge cake"
      }]
  });

  let capturedFields = {
    "desc": "This is a new cake",
    "image": "https://s3-eu-west-1.amazonaws.com/s3.mediafileserver.co.uk/carnation/WebFiles/RecipeImages/lemoncheesecake_lg.jpg",
    "title": "New cake"
  }

  let currentCake = {
    "desc": "A cheesecake made of lemon",
    "image": "https://s3-eu-west-1.amazonaws.com/s3.mediafileserver.co.uk/carnation/WebFiles/RecipeImages/lemoncheesecake_lg.jpg",
    "title": "Lemon cheesecake"
  }

  expect(component.state().cakes[0]).toMatchObject(currentCake)
  component.instance().editCakeCallBack(capturedFields, currentCake)
  expect(component.state().cakes[-1]).toMatchObject(capturedFields)

});
