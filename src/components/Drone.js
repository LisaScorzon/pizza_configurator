import React, { PureComponent } from 'react'
//import PropTypes from 'prop-types'
 import { connect } from 'react-redux'
 import totalPrice  from './Costs'
 import {droneDelivery} from '../actions/build'
 import store from '../store'

 class TurboDrone extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            value: " " }

        this.handleChange = this.handleChange.bind(this);
  
        
    }
    handleChange = (e) => {
    if (e.target.checked === true &&<p><bold>Total</bold>: € {this.totalDelivery}</p>){
        store.dispatch(droneDelivery(e.target.value))
    } else {
        e.target.checked === false &&<p><bold>Total</bold>: € {this.totalDelivery}</p>
    }
    }
    handleSubmit(event) {
        alert('You choose: ' + this.state.value);
        event.preventDefault();
        }
                
render() {
    
return (

     <form onSubmit={this.handleSubmit}>
        <fieldset value={this.state.value} onChange={this.handleChange}>
    
        <legend>Turbo Drone Delivery (additional cost of 10%): 
        </legend>
            
                
                <input type="checkbox" value="DroneDelivery" id="DroneDelivery"  />
                <label for="DroneDelivery"> </label>
            
        </fieldset> 
 
    </form>
   
        )
    }
    }




function mapStateToProps(state){
    return {
      delivery: state.delivery,
    }
  }
  
  export default connect(mapStateToProps,{
      droneDelivery
  }
)(TurboDrone)