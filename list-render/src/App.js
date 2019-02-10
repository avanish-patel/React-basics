import React, { Component } from 'react';
import './App.css';
import Ninja from './components/Ninja';

class App extends Component {

  state = {
    ninjas : [
      {name:"Avanish", age: 25, id : 1},
      {name:"Raj", age: 20, id : 2},
      {name:"Dixit", age: 26, id : 3}
    ]
  }

  render() {
    return (
      <div className="App">
        <h1>Ninjas List</h1>
        <Ninja ninjas={this.state.ninjas}></Ninja>
      </div>
    );
  }
}

export default App;
