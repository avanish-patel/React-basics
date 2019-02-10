import React, { Component } from 'react';
import './App.css';
import AddNinja from './components/AddNinja';
import ShowNinja from './components/ShowNinjas';

class App extends Component {

  state = {
    ninjas : [
      { name: "Avanish", age: 25, id:1 }
    ]
  }

  addNinja = (ninja) => {
    ninja.id = Math.random();

    let newNinjas = [...this.state.ninjas, ninja];

    this.setState({
      ninjas: newNinjas
    });
  }

  deleteNinja = (id) => {

    let oldNinjas = [...this.state.ninjas];

    let newNinjas = oldNinjas.filter( (ninjas) => ninjas.id !== id);

    this.setState({
      ninjas : newNinjas
    });
  }

  render() {
    return (
      <div className="App">
        <AddNinja addNinja={this.addNinja}></AddNinja>
        <ShowNinja ninjas={this.state.ninjas}  deleteNinja={this.deleteNinja}></ShowNinja>
      </div>
    );
  }
}

export default App;
