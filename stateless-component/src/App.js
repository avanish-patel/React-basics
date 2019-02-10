import React, { Component } from 'react';
import './App.css';
import Ninja from './components/Ninja'

// component with class keyword carry state + life cycle hooks and called container component
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
        <Ninja ninjas={this.state.ninjas}/>
      </div>
    );
  }
}

export default App;
