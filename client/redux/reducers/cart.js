const ADD_TO_CART = '@cart/ADD_TO_CART'
const REMOVE_FROM_CART = '@cart/REMOVE_FROM_CART'
const INCREASE_AMOUNT = '@cart/INCREASE_AMOUNT'
const DECREASE_AMOUNT = '@cart/DECREASE_AMOUNT'
const TOTAL_VALUES = '@cart/TOTAL_VALUES'

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
    case REMOVE_FROM_CART:
      return {
        ...state,
        list: action.payload
      }
    case INCREASE_AMOUNT:
    case DECREASE_AMOUNT:
      return {
        ...state,
        list: {
          ...state.list,
          ...action.payload
        }
      }
    case TOTAL_VALUES:
      return {
        ...state,
        totalAmount: action.payload.totalAmount,
        totalPrice: action.payload.totalPrice
      }
    default:
      return state
  }
}

export const addToCart = (id) => {
  return (dispatch, getState) => {
    const { list } = getState().cart
    const { price } = getState().products.list[id]
    const itemAmount = typeof list[id] === 'undefined' ? 1 : list[id].amount + 1

    dispatch({
      type: ADD_TO_CART,
      payload: {
        list: { ...list, [id]: { ...list[id], amount: itemAmount } },
        price
      }
    })
  }
}

export const changeItemAmountInCart = (id, count) => {
  return (dispatch, getState) => {
    const { list, totalAmount, totalPrice } = getState().cart
    const { amount } = list[id]
    const { price } = getState().products.list[id]
    const newAmount = amount + count

    if (count > 0) {
      dispatch({
        type: INCREASE_AMOUNT,
        payload: { [id]: { ...list[id], amount: newAmount } }
      })
    }
    if (count < 0) {
      dispatch({
        type: DECREASE_AMOUNT,
        payload: {
          [id]: { ...list[id], amount: newAmount }
        }
      })
    }
    if (newAmount <= 0) {
      delete list[id]
      dispatch({
        type: REMOVE_FROM_CART,
        payload: { ...list }
      })
    }

    dispatch({
      type: TOTAL_VALUES,
      payload: {
        totalAmount: totalAmount + count,
        totalPrice: totalPrice + price * count
      }
    })
  }
}

export const removeFromCart = (id) => {
  return (dispatch, getState) => {
    const { list, totalAmount, totalPrice } = getState().cart
    const rmProdAmount = list[id].amount
    const { price } = getState().products.list[id]
    delete list[id]
    dispatch({
      type: REMOVE_FROM_CART,
      payload: { ...list }
    })

    dispatch({
      type: TOTAL_VALUES,
      payload: {
        totalAmount: totalAmount - rmProdAmount,
        totalPrice: totalPrice - price * rmProdAmount
      }
    })
  }
}
