
export const SELECT_BASE = 'SELECT_BASE'
export const SELECT_TOPPINGS = 'SELECT_TOPPINGS'
export const SELECT_SAUCE = 'SELECT_SAUCE'
export const REMOVE_TOPPING = 'REMOVE_TOPPING'




export const selectBase = ( base , price) => {
  return {
    type: SELECT_BASE,
    payload: base, price
  }
}
export const selectToppings = ( toppings , price) => {
  return {
    type: SELECT_TOPPINGS,
    payload: toppings, price
  }
}

export const selectSauce = ( sauce, price ) => {
  return {
    type: SELECT_SAUCE,
    payload: sauce, price
  }
}



export const removeTopping = ( topping ) => {
  return {
    type: REMOVE_TOPPING,
    payload: topping
  }
}

