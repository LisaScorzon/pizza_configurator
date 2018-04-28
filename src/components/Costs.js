import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { bases, sauces, toppings } from '../ingredientss/ingredientss'

class Costs extends PureComponent {

    totalCost() {
        const baseCost = (this.props.base ? bases[this.props.base] : 0)
        const sauceCost= (this.props.sauce ? sauces[this.props.sauce] : 0)
      
    //max three toppings- fixed price- 0.50e per item  
        const toppingsCost= (this.props.toppings).map(topping => toppings[topping])
                                                   .reduce((sum, val) => sum + val, 0)
        return baseCost + sauceCost + toppingsCost
        
    }
    
    render(){

        return(
            <div>
            {this.totalCost()}
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
  
  export default connect(mapStateToProps)(Costs)