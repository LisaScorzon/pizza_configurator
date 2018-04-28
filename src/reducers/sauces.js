
import { SELECT_SAUCE } from '../actions/build'



// export default function(state = null, action = {}) {
//   switch(action.type) {
//     case SELECT_SAUCE :
//       return action.payload.value
//     default :
//       return state
//   }
// }

export default function (state = sauces, action) {
  switch (action.type) {
    case SELECT_SAUCE :
    return action.payload.value
    default:
      return state
  }
}
export const sauces = [
  {
  id:1,
  name: 'White sauce',
  price: '0 (included in price)',
  },
  
  {
    id:2,
  name: 'Red sauce',
  price: '0 (included in price)',


  }, 
  
  {
    id:3,
  name: 'Double red sauce',
  price: '1.50',

  },
  {

    id:4,
  name: 'Mix it up',
  price: '0.50',
  }
]