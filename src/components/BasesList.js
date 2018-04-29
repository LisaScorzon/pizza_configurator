import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {bases} from '../reducers/bases'
import {selectBase} from '../actions/build'
import store from '../store'




class BasesList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {value: 'pick one!'
  ,price: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
    store.dispatch(selectBase({value: event.target.value, price : event. target.price}))
  }

  handleSubmit(event) {
    alert('Your Base is: ' + this.state.value + 'your price is:' + this.state.price);
    event.preventDefault();
  }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Pick your Pizza Base:
            <select value={this.state.value} price={this.state.price} onChange={this.handleChange}>
              <option value="25cm NY Style" price="1">25cm NY Style</option>
              <option value="30cm NY Style" price="1">30cm NY Style</option>
              <option value="35cm NY Style" price="1">35cm NY Style</option>
              <option value="20cm NY Style" price="1">20cm NY Style</option>
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
      price: state.price
    
    }
  }

  
  export default connect(mapStateToProps, {
    selectBase,
  }
  )(BasesList)
  