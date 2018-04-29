import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Costs from './Costs'
import { bases, sauces, toppings } from '../ingredients/ingredients'


class FinalPizza extends PureComponent {


  render() {
    return(
      <div className="finalPizza">
        <h3>Your pizza :</h3>
        <h6>your base:</h6>
        <p>  {this.props.base} </p>
        <h6>your sauce:</h6>
        <p>  {this.props.sauce} </p>
        <h6>did you add toppings':</h6>
        <p>{this.props.toppings}</p>
        
        <Costs/>
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