import React, { Component } from 'react';
import Items from './Items';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Items name="Bonny" age="25" belt="Black"/> 
      <Items name="Bravo" age="27" belt="Green"/>      
      </div>
    );
  }
}

export default App;
