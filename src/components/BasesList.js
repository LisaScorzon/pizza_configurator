import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'




class BasesList extends PureComponent {
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
      const {bases} = this.props
      return (
        <div>
          <h1>All Bases</h1>
  
          <table>
            <thead>
              <tr>
                <th></th>
                <th> ID </th>
                <th>Size</th>
                <br/>


                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              { bases.map(base => (<tr key={base.id}>
                <td>{base.id}</td>
                 <br/>
                 
                 <td>{base.size}</td>
                  <br/>
                  <br/>


                <td>&euro; {base.price}</td>
              </tr>)) }
            </tbody>
                  </table>
        </div>
      )
    }
  }
  
  const mapStateToProps = function (state) {
    return {
      bases: state.bases,
    
    }
  }

  
  export default connect(mapStateToProps, {}
  )(BasesList)
  