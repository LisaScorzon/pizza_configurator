import React, {PureComponent} from 'react'
//import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import { toppings } from '../ingredients/ingredients'
import {selectToppings, removeTopping} from '../actions/build'
import store from '../store'




 class ToppingsList extends PureComponent{
    constructor(props) {
    super(props);
    //this.state = {checked: []}
    this.state = {value: ''}
    
              

    this.handleChange = this.handleChange.bind(this);
  
}
handleChange = (e) => {
  if (e.target.checked) {
      store.dispatch(selectToppings(e.target.value))
  } else {
      store.dispatch(removeTopping(e.target.value));
  }
}
          
   handleSubmit(event) {
   alert('Your topping is: ' + this.state.value);
   event.preventDefault();
   }
           
   
render() {
  return (



  <form onSubmit={this.handleSubmit}>
    <fieldset value={this.state.value} onChange={this.handleChange}>
    <legend>Choose your Toppings; max 3 per pizza,
            each topping is 0.50
    </legend>
    
     
        <input type="checkbox" value="Pineapple" name="Pineapple"  />
        <label for="Pineapple">Pineapple</label>
      
        <input type="checkbox" id="Corn" name="Corn" value="Corn"/>
        <label for="Corn">Corn</label>
      
        <input type="checkbox" id="Olives (green)" name="Olives (green)" value="Olives (green)"/>
        <label for="Olives (green)">Olives (green)</label>

      <input type="checkbox" id="Red onion" name="Red onion" value="Red onion"/>
        <label for="Red onion">Red onion</label>
      
        <input type="checkbox" id="Spinach" name="Spinach" value="Spinach"/>
        <label for="Spinach">Spinach</label>

        <input type="checkbox" id="Cherry tomatoes" name="Cherry tomatoes" value="Cherry tomatoes"/>
        <label for="Cherry tomatoes">Cherry tomatoes</label>

        <input type="checkbox" id="Chicken" name="Chicken" value="Chicken"/>
        <label for="Chicken">Chicken</label>
      
    
        
        </fieldset> 
  </form>
  
   

    )
  }
}


const mapStateToProps = function (state, props) {
  return {
    toppings: state.toppings,
  
  }
}

export default connect(mapStateToProps, {
  selectToppings, removeTopping
}
)(ToppingsList)

