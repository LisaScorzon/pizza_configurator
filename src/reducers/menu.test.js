import board from './menu'

describe('menu reducer', () => {
  const reducer = menu
  const initialState = []

  it('returns an empty array for the initial state', () => {
    expect(reducer()).toEqual(initialState)
  })
})