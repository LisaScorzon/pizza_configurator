
import { SELECT_BASE } from '../actions/build'


// export default function(state = null, action = {}) {
//   switch(action.type) {
//     case SELECT_BASE :
//       return action.payload.value
//     default :
//       return state
//   }
//}
export default function (state = null, action = {}) {
  switch (action.type) {
    case SELECT_BASE :
    return action.payload.value
    default:
      return state
  }
}


export const bases = [
  {
  id:1,
  size: '25cm NY Style',
  price: '8.99',
  },
  
  {
    id:2,
  size: '30cm NY Style',
  price: '11.49',


  }, 
  
  {
    id:3,
  size: '35cm NY Style',
  price: '13.49',

  },
  {

    id:4,
  size: '20cm NY Style',
  price: '6.45',
  }
]