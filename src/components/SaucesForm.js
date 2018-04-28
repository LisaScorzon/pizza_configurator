import React, {PureComponent} from 'react'

class SaucesForm extends PureComponent {
	state = {}

	handleOptionChange = (e) => {
		e.preventDefault()
        this.props.onSubmit(this.state)
        
          }

          handleChange = (event) => {
            const {name, value} = event.target
    
            this.setState({
              [name]: value
            })
        }
       
        render() {
            const initialValues = this.props.initialValues || {}
           
            return (
            <form onSubmit={this.handleFormSubmit}>
            <div className="1">
              <label>
                <input type="radio" value={
						this.state.name || initialValues.name || ''
					}
                checked={this.state.selectedOption === 'option1' }
                onChange={this.handleOptionChange} /> 
                select me!
                
                {console.log('You have selected:', this.props.sauces)}
              
                
              
              </label>
            </div>
          </form>

        )
    }}

export default SaucesForm

/* handleFormSubmit: (formSubmitEvent) => {
                formSubmitEvent.preventDefault();
              
                console.log('You have selected:', this.state.selectedOption);
              }*/