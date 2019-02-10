import React, { Component } from 'react';
import './App.css';
import Ninja from './components/Ninja';

class App extends Component {
  render() {
    return (
      <div className="App">
      <h1>App Component</h1>
      <Ninja name="Avanish" age="25" />

      </div>
    );
  }
}

export default App;
