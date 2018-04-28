import React, {PureComponent} from 'react'

class BasesForm extends PureComponent {
	state = {}

	handleSubmit = (e) => {
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
		<form>
        <div className="1">
          <label>
            <input type="radio" value="option1" checked={this.state.selectedOption === 'option1'} />
            select me!
          </label>
        </div>
      </form>

        )
    }
}
export default BasesForm
