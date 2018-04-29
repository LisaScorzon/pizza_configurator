import React, { Component } from 'react';
import newAgePizza from './newAgePizza.png';
import './App.css';
import { toppings, sauces, bases } from './ingredients/ingredients'
import BasesList from './components/BasesList'
import SaucesList from './components/SaucesList'
import ToppingsList from './components/ToppingsList'
import FinalPizza from './components/FinalPizza'
import TurboDrone from './components/Drone'




class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={newAgePizza} className="App-logo" alt="logo" />
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
            <h5>
              <FinalPizza/>
              </h5>
      </div>
      </div>
    );
  }
}

export default App;
