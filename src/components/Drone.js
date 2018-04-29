import React, { PureComponent } from 'react'
//import PropTypes from 'prop-types'
 import { connect } from 'react-redux'
 import totalPrice  from './Costs'

 class TurboDrone extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            droneDelivery: "Normal"
        }
        
    }
 render() {
    if (this.DroneDelivery === true &&<p><bold>Total</bold>: € {this.totalDelivery}</p>){

    } else {
        this.DroneDelivery === true &&<p><bold>Total</bold>: € {this.totalDelivery}</p>
       
    }


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
      
    }
  }
  
  export default connect(mapStateToProps)(TurboDrone)