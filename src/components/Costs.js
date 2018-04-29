import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { bases, sauces, toppings } from '../ingredients/ingredients'

class Costs extends PureComponent {

    totalPrice() {
        const basePrice = (this.props.base ? bases[this.props.base] : 0)
        const saucePrice= (this.props.sauce ? sauces[this.props.sauce] : 0)
        //const toppingPrice= (this.props.topping ? toppings[this.props.topping] : 0)
      
    //max three toppings- fixed price- 0.50e per item  
        const toppingPrice= (this.props.toppings).length * .5
        
        console.log(toppingPrice.length) 
        
        
    return basePrice + saucePrice + toppingPrice
        
    }


    deliveryPrice(){

    const delivery=(this.props.totalPrice)*0.10
    


}
    render(){

        return(
            <div>
            {this.totalPrice()}
            {this.deliveryPrice()}
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