import React, { Component } from 'react';
import './App.css';
import Header from './components/header.js';
import CakeList from './components/cakelist.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header/>
        </header>
        <CakeList/>
      </div>
    );
  }
}

export default App;
