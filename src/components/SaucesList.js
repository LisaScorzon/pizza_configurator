import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'




class SaucesList extends PureComponent {
    static propTypes = {
      bases: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired
      })).isRequired
    }

    // componentWillMount() {
    //   this.props()
    // }
  
    render() {
      const {sauces} = this.props
      return (
        <div>
          <h2>All sauces</h2>
  
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <br/>

                <th>Name</th>
                <br/>

                <br/>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              { sauces.map(sauce => (<tr key={sauce.id}>
                <td>{sauce.id}</td>
                <br/>
                <td>{sauce.name}</td>
                 <br/>
                 <br/>
                <td>&euro; {sauce.price}</td>
              </tr>)) }
            </tbody>
                  </table>
        </div>
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