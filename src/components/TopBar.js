import React from 'react'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import {connect} from 'react-redux'


const TopBar = (props) => {
  const { location, history, user } = props

  return (
    <AppBar position="absolute" style={{
        zIndex:10,
        backgroundColor: '#F50057'}}>
      <Toolbar>
        <Typography variant="title" color="" style={{flex: 10}}>
          New Age Pizza
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

const mapStateToProps = function (state) {
    return {
      
    
    }
  }

  


export default (
  connect(mapStateToProps)(TopBar)
)