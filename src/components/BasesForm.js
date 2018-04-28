import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {SELECT_BASE} from '../actions/build'
import {bases} from '../reducers/bases'


class BasesForm extends PureComponent {
	state = {
    value : ''
  }

	handleOptionChange = (e) => {
        this.setState({
            selectedOption: e.target.value
          })
          
	}
    

	render() {
        const initialValues = this.props.initialValues || {}
      
          
        return 
		

        
    }
}
export default BasesForm