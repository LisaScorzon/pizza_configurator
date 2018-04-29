import { DRONE_DELIVERY } from '../actions/build'

const initialState = "1"

export default function(state = initialState, action = {}) {
  switch(action.type) {
    case DRONE_DELIVERY :
      return action.payload
    default :
      return state
  }
}