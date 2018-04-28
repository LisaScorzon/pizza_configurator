import React, {PureComponent} from 'react'

class BasesForm extends PureComponent {
	state = {}

	handleOptionChange = (e) => {
        this.setState({
            selectedOption: e.target.value
          })
          
	}
    

	render() {
        const initialValues = this.props.initialValues || {}
        handleFormSubmit: (formSubmitEvent) => {
            formSubmitEvent.preventDefault();
          
            console.log('You have selected:', this.state.selectedOption);
          }
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
