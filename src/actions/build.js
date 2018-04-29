
export const SELECT_BASE = 'SELECT_BASE'
export const SELECT_TOPPINGS = 'SELECT_TOPPINGS'
export const SELECT_SAUCE = 'SELECT_SAUCE'
export const REMOVE_TOPPING = 'REMOVE_TOPPING'
export const DRONE_DELIVERY='DRONE_DELIVERY'




export const selectBase = ( base ) => {
  return {
    type: SELECT_BASE,
    payload: base
  }
}
export const selectToppings = ( toppings) => {
  return {
    type: SELECT_TOPPINGS,
    payload: toppings
  }
}

export const selectSauce = ( sauce ) => {
  return {
    type: SELECT_SAUCE,
    payload: sauce
  }
}



export const removeTopping = ( topping ) => {
  return {
    type: REMOVE_TOPPING,
    payload: topping
  }
}
export const droneDelivery = ( delivery ) => {
  return {
    type: DRONE_DELIVERY,
    payload: delivery
  }
}
