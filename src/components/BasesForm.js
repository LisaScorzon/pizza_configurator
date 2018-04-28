import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {SELECT_BASE} from '../actions/build'
import {bases} from '../reducers/bases'


class BasesForm extends PureComponent {
	state = {}

	handleOptionChange = (e) => {
        this.setState({
            selectedOption: e.target.value
          })
          
	}
    

	render() {
        const initialValues = this.props.initialValues || {}
      
          
        return (
		<form onSubmit={this.handleFormSubmit}>
        <div className="1">
          <label>
            <input type="radio" value="option1" 
            checked={this.state.selectedOption === 'option1'}
            onChange={this.handleOptionChange} /> 
            select me!
          </label>
        </div>
      </form>

        )
    }
}
export default BasesForm