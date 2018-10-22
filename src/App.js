import React, { Component } from 'react';
import Items from './Items';
import './App.css';

class App extends Component {
  state = {
    items: [
      { name: "Bonface", age: 30, belt: "Black", id: 1 },
      { name: "Denis", age: 26, belt: "Green", id: 2 },
      { name: "Alice", age: 18, belt: "Brown", id: 3 }
    ]
  }
  render() {
    return (
      <div className="App">
      <Items items={ this.state.items }/>      
      </div>
    );
  }
}

export default App;
