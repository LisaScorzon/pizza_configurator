import React, { Component } from 'react';
import newAgePizza from './newAgePizza.png';
import './App.css';
import { toppings, sauces, bases } from './ingredients/ingredients'
import BasesList from './components/BasesList'
import SaucesList from './components/SaucesList'
import ToppingsList from './components/ToppingsList'
import FinalPizza from './components/FinalPizza'
import TurboDrone from './components/Drone'
import TopBar from './components/TopBar';
import SimpleSelect from './components/dropdown'




class App extends Component {
  render() {
    return (
      <div>
         <div>
        <TopBar/>
        </div>
        <h2 className='title'>La Pizza è Bella</h2>
        <p className="App-intro">
        </p>
        <div>
  
          <h4>
        <BasesList bases= {bases}/>
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
