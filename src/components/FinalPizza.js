import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Costs from './Costs'
import TurboDrone from './Drone'
import { bases, sauces, toppings } from '../ingredients/ingredients'

class FinalPizza extends PureComponent {


  render() {
    return(
      <div className="finalPizza">
        <h3>Your pizza :</h3>
        <h3>Base: {this.props.base}</h3>
       
        <h3>Sauce: {this.props.sauce} </h3>
    
        <h3>Toppings: {this.props.toppings + " "}</h3>
       
        <p>&euro; <Costs/></p>
        <h6> final price including delivery is:</h6>
        <p>&euro; < TurboDrone/> </p>
        

        
      </div>
      )
    }
}

function mapStateToProps(state){
  return {
    base: state.bases,
    sauce: state.sauces,
    toppings: state.toppings
  }
}

export default connect(mapStateToProps)(FinalPizza)