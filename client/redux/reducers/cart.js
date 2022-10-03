const ADD_TO_CART = 'ADD_TO_CART'
// const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
// const REMOVE_ALL_FROM_CART = 'REMOVE_ALL_FROM_CART'

const initialState = {
  list: {},
  totalPrice: 0,
  totalAmount: 0
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        list: action.payload.list,
        totalAmount: state.totalAmount + 1,
        totalPrice: state.totalPrice + action.payload.price
      }
    default:
      return state
  }
}

export const addToCart = (id) => {
  return (dispatch, getState) => {
    const { list } = getState().cart
    const procuctList = getState().products.list
    const { price } = procuctList.find((product) => product.id === id)
    const itemAmount = typeof list[id] === 'undefined' ? 1 : list[id].amount + 1

    return dispatch({
      type: ADD_TO_CART,
      payload: {
        list: { ...list, [id]: { ...list[id], amount: itemAmount } },
        price
      }
    })
  }
}
