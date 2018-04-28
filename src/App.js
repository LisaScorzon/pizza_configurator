import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import bases from './reducers/bases'
import BasesList from './components/BasesList'
import SaucesList from './components/SaucesList'
import sauces from './reducers/sauces'




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
          <h3>
        <BasesList bases={ bases } />
            </h3>
            <h3>
            <SaucesList sauces={ sauces } />
            </h3>
      </div>
      </div>
    );
  }
}

export default App;
