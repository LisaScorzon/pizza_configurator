import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { bases, sauces, toppings, droneDelivery } from '../ingredients/ingredients'

class Costs extends PureComponent {

    totalPrice() {
        const basePrice = (this.props.base ? bases[this.props.base] : 0)
        const saucePrice= (this.props.sauce ? sauces[this.props.sauce] : 0)
     
        const toppingPrice= (this.props.toppings).length * .5
        
        console.log(toppingPrice.length) 
        
        
    return  basePrice + saucePrice + toppingPrice
    }
        
   

    render() { 

        return(
            <div>
            {this.totalPrice()}
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