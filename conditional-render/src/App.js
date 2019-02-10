import React, { Component } from 'react';
import './App.css';
import NinjaTemplate from './components/NinjaTemplate';
import NinjaJs from './components/NinjaJs';

class App extends Component {

  state = {
    ninjas : [
      {name: "Avanish", age: 25, id:1},
      {name: "Raj", age: 20, id:2},
      {name: "Dixit", age: 26, id:3}
    ]
  }

  render() {
    return (
      <div className="App">
      <NinjaJs ninjas={this.state.ninjas}></NinjaJs>
      <NinjaTemplate ninjas={this.state.ninjas}></NinjaTemplate>
      </div>
    );
  }
}

export default App;
