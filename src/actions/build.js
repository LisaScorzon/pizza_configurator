
export const SELECT_BASE = 'SELECT_BASE'
export const SELECT_TOPPINGS = 'SELECT_TOPPINGS'
export const SELECT_SAUCE = 'SELECT_SAUCE'
export const REMOVE_TOPPING = 'REMOVE_TOPPING'




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

// export const updateClicked = (input) => (dispatch, getState) => {
//   const state = getState()
//   const checked = input.nativeEvent.path['0'].checked

//   let payload;
//   (checked === true) ?
//     state.reference.clicked = state.reference.clicked + 1 : state.reference.clicked = state.reference.clicked - 1
// dispatch({ type: UPDATE_CLICKED, payload: state.reference})
// }

// export const resetClicked = _ => (dispatch, getState) => {
//   const state = getState()
//   state.reference.clicked = state.reference.clicked - state.reference.clicked
//   dispatch({type: RESET_CLICKED, payload: state.reference})
// }