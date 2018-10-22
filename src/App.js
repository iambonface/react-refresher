import React, { Component } from 'react';
import Items from './Items';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Items name="Bonny" age="25" belt="Black"/>       
      </div>
    );
  }
}

export default App;
