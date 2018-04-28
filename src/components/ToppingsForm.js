import React, {PureComponent} from 'react'

class ToppingsForm extends React.Component {
	constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleOptionChange = this.handleOptionChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

	handleOptionChange = (e) => {
		e.preventDefault()
    this.setState({value: e.target.value});
        
          }
          handleSubmit(e) {
            alert('A topping was submitted: ' + this.state.value);
            e.preventDefault();
          }

          
    
            
        
       
          render() {
            const initialValues = this.props.initialValues || {}
           
            return (
            <form onSubmit={this.handleFormSubmit}>
            <div>
              <label>
                <input type="radio"  value={this.state.value} onChange={this.handleChange} 
                checked={this.state.sauce === 'sauce' }
                onChange={this.handleOptionChange} /> 
                select me!
                
                {console.log('You have selected:', this.props.selectedOption)}
              </label>
          
            </div>
          </form>

        )
    }}

export default ToppingsForm
