import { ADD_PRICE } from '../actions/build'

const initialState = 0

export default function(state = initialState, action = {}) {
  switch(action.type) {
    case ADD_PRICE :
      return action.payload
    default :
      return state
  }
}