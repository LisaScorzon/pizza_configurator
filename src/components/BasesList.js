import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import { bases } from '../ingredients/ingredients'
import {selectBase} from '../actions/build'
import store from '../store'
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

  
  class BasesList extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};


 this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
   }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
    store.dispatch(selectBase({value: event.target.value}))
}

  handleSubmit(event) {
        alert('Your Sauce is: ' + this.state.value);
        event.preventDefault();
      }
      render() {
      return (
      <form className='bases' autoComplete="off">
        <FormControl className='formControl'>
          <InputLabel htmlFor="base-simple"> Bases </InputLabel>
          <Select
            value={this.state.base}
            onChange={this.handleChange}
            inputProps={{
              name: "base"
            }}
           
          >
            <MenuItem value="">
             
            </MenuItem>
            <MenuItem value={'30cm NY Style'}>30cm NY Style</MenuItem>
            <MenuItem value={'35cm NY Style'}>35cm NY Style</MenuItem>
            <MenuItem value={'20cm NY Style'}>20cm NY Style</MenuItem>
            <MenuItem value={'25cm NY Style'}>25cm NY Style</MenuItem>
          </Select>
        </FormControl>
        
      </form>
    );
  }
}


        
      

  
  const mapStateToProps = function (state) {
    return {
      bases: state.bases,
     
    
    }
  }

  
  export default connect(mapStateToProps, {
    selectBase,
  })(BasesList)

 
 
  