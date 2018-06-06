import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {selectSauce} from '../actions/build'
import {sauces} from '../ingredients/ingredients'
import store from '../store'



class SaucesList extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {value: ''};


 this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
   }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
    store.dispatch(selectSauce({value: event.target.value}))
}

  handleSubmit(event) {
        alert('Your Sauce is: ' + this.state.value);
        event.preventDefault();
      }

      render() {
              return (
                <form onSubmit={this.handleSubmit}>
                  <label>
                    Pick your favorite pizza sauce:
                    <select value={this.state.value} price={this.state.value.price} onChange={this.handleChange}>
                      <option value="White Sauce">White Sauce</option>
                      <option value="Red Sauce" >Red Sauce</option>
                      <option value="Double red sauce" price="1.50">Double red sauce</option>
                      <option value="Mix it up">Mix it up</option>
                    </select>
                  </label>
                  <input type="submit" value="Submit" className='submitButton' />
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
 