import React, { Component } from 'react';
import './App.css';
import { BrowserRouter , Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Error from './components/Error';
import Navigation from './components/Navigation';

class App extends Component {
  render() {
    return (
      <BrowserRouter>

        <div>
        <Navigation/>
        <Switch>
            <Route path="/" component={Home} exact ></Route>
            <Route path="/contact" component={Contact}></Route>
            <Route path="/about" component={About}></Route>
            <Route component={Error}></Route>
          </Switch>
        </div>
        
      </BrowserRouter>
    );
  }
}

export default App;
