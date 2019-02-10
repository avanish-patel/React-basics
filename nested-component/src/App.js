import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>App Component</h1>
        <Navbar></Navbar>
      </div>
    );
  }
}

export default App;
