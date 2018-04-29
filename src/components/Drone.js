import React, { PureComponent } from 'react'
//import PropTypes from 'prop-types'
 import { connect } from 'react-redux'
 import totalPrice  from './Costs'

 class TurboDrone extends PureComponent {
    
    handleSubmit(event) {
        alert('You Picked: ' + this.state.value);
        event.preventDefault();
      }

      drone() {
          if (document.getElementById("DroneDelivery")=== true)
          {
            const delivery=(this.props.totalPrice)*0.10
          }

        }
     
        render() {


        return (
            <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
            <label>
                Turbo Drone Delivery (additional cost of 10%): 
                <input type="checkbox" value="DroneDelivery" id="DroneDelivery"  />
                <label for="DroneDelivery"></label>
            </label>
            
            </form>
        )
    }
}


function mapStateToProps(state){
    return {
      
    }
  }
  
  export default connect(mapStateToProps)(TurboDrone)