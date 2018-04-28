import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import BasesForm from './BasesForm'
import {bases} from '../reducers/bases'
import {selectBase} from '../actions/build'




class BasesList extends PureComponent {
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
              <option value="25cm NY Style">25cm NY Style</option>
              <option value="30cm NY Style">30cm NY Style</option>
              <option value="35cm NY Style">35cm NY Style</option>
              <option value="20cm NY Style">20cm NY Style</option>
            </select>
          </label>
          <input type="submit" value="Submit" />
        </form>
      )
    }
  }
  
  const mapStateToProps = function (state) {
    return {
      bases: state.bases,
    
    }
  }

  
  export default connect(mapStateToProps, {
    selectBase,
  }
  )(BasesList)
  