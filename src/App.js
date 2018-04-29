import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import bases from './reducers/bases'
import BasesList from './components/BasesList'
import SaucesList from './components/SaucesList'
import sauces from './reducers/sauces'
import ToppingsList from './components/ToppingsList'
import toppings from './reducers/toppings'




class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="title">New Age Pizza</h1>
        </header>
        <h2> Pick your pizza base </h2>
        <p className="App-intro">
        </p>
        <div>
          <h4>
        <BasesList />
            </h4>
            <h4>
            <SaucesList sauces={ sauces } />
            </h4>
            <h4>
            <ToppingsList toppings={ toppings } />
            </h4>
            
      </div>
      </div>
    );
  }
}

export default App;
