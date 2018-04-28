import { SELECT_TOPPINGS } from '../actions/build'
import { REMOVE_TOPPING } from '../actions/choice'

export default function(state = [], action = {}) {
  switch(action.type) {
    case SELECT_TOPPINGS :
        if (state.length < 3) {
            return state.concat(action.payload)
        } else {
            return state
        }
    case REMOVE_TOPPING :
        return state.filter(topping => topping !== action.payload)
    default :
      return state
  }
}

const toppings = [
    {
    id:1,
    name: 'Pineapple',
    price: '0.50',
    },
    
    {
      id:2,
    name: 'Corn',
    price: '0.50',
    }, 
    
    {
      id:3,
    name: 'Olives (green)',
    price: '0.50',
  
    },
    {
  
      id:4,
    name: 'Red Onion',
    price: '0.50',
    },
    {
        id:5,
      name: 'Spinach',
      price: '0.50',
    
      },
      {
        id:6,
      name: 'Cherry tomatoes',
      price: '0.50',
    
      },
      {
        id:7,
      name: 'Chicken',
      price: '0.50',
    
      }

  ]

