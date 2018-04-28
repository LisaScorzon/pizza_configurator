import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import SaucesForm from './SaucesForm'
import {SelectSauce} from '../actions/build'
import {sauces} from '../ingredients/ingredients'





class SaucesList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {value: 'coconut'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Your Base is: ' + this.state.value);
    event.preventDefault();
  }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Pick your Pizza Base:
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="White Sauce">White Sauce</option>
              <option value="Red Sauce">Red Sauce</option>
              <option value="Double red sauce">Double red sauce</option>
              <option value="Mix it up">Mix it up</option>
            </select>
          </label>
          <input type="submit" value="Submit" />
        </form>
      )
    }
  }
  
  const mapStateToProps = function (state) {
    return {
      sauces: state.sauces,
    
    }
  }

  
  export default connect(mapStateToProps, {}
  )(SaucesList)