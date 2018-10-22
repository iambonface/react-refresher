import React, { Component } from 'react';
import Items from '../components/Items';
import AddItem from './AddItem';
import './App.css';

class App extends Component {
  state = {
    items: [
      { name: "Bonface", age: 30, belt: "Black", id: 1 },
      { name: "Denis", age: 26, belt: "Green", id: 2 },
      { name: "Alice", age: 18, belt: "Brown", id: 3 }
    ]
  }

  addItem = (item) => {
    item.id = Math.random()
    //console.log(item)
    let items = [...this.state.items, item]
    this.setState({
      items
    })
  }

  deleteItem = (id) => {
    //console.log(id)
    let items = this.state.items.filter(item => {
      return item.id !== id
    })
    this.setState({
      items
    })
  }
  render() {
    return (
      <div className="App">
      <Items items={ this.state.items } deleteItem={ this.deleteItem }/> 
      <AddItem addItem={this.addItem} />     
      </div>
    );
  }
}

export default App;
