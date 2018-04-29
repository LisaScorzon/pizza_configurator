import React, { PureComponent } from 'react'
//import PropTypes from 'prop-types'
 import { connect } from 'react-redux'

 class TurboDrone extends PureComponent {
    
    handleSubmit(event) {
        alert('Your Picked: ' + this.state.value);
        event.preventDefault();
      }
    render() {
        return (
            <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
            <label>
                Turbo Drone Delivery (additional cost of 10%): 
                <input type="checkbox" value="DroneDelivery" name="DroneDelivery"  />
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