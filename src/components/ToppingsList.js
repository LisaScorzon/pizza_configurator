import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'




class ToppingsList extends PureComponent {
    static propTypes = {
      toppings: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired
      })).isRequired
    }

    // componentWillMount() {
    //   this.props()
    // }
  
    render() {
      const {toppings} = this.props
      return (
        <div>
          <h2>Pick your toppings! (max 3)</h2>
  
          <table>
            <thead>
              <tr>
              
                <th>ID</th>
                
                <br/>
               
                <th>Name</th>
              
               
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              { toppings.map(topping => (<tr key={topping.id}>
                <td>{topping.id}</td>
                <br/>
                <td>{topping.name}</td>
                
                <td>&euro; {topping.price}</td>
              </tr>)) }
            </tbody>
                  </table>
        </div>
      )
    }
  }
  
  const mapStateToProps = function (state) {
    return {
      toppings: state.toppings,
    
    }
  }

  
  export default connect(mapStateToProps, {}
  )(ToppingsList)