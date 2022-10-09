export const ADD_TO_CART = '@cart/ADD_TO_CART'
export const REMOVE_FROM_CART = '@cart/REMOVE_FROM_CART'
export const INCREASE_AMOUNT = '@cart/INCREASE_AMOUNT'
export const DECREASE_AMOUNT = '@cart/DECREASE_AMOUNT'
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
        list: action.payload.list
      }
    case INCREASE_AMOUNT:
    case DECREASE_AMOUNT:
      return {
        ...state,
        list: {
          ...state.list,
          ...action.payload.list
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
    const product = getState().products.list[id]
    const itemAmount = typeof list[id] === 'undefined' ? 1 : list[id].amount + 1

    dispatch({
      type: ADD_TO_CART,
      payload: {
        list: { ...list, [id]: { ...product, amount: itemAmount } },
        price: product.price,
        product
      }
    })
  }
}

export const changeItemAmountInCart = (id, count) => {
  return (dispatch, getState) => {
    const { list, totalAmount, totalPrice } = getState().cart
    const { amount, ...product } = list[id]
    const newAmount = amount + count

    if (count > 0) {
      dispatch({
        type: INCREASE_AMOUNT,
        payload: {
          list: {
            [id]: { ...product, amount: newAmount }
          },
          product
        }
      })
    }
    if (count < 0) {
      dispatch({
        type: DECREASE_AMOUNT,
        payload: {
          list: {
            [id]: { ...product, amount: newAmount }
          },
          product
        }
      })
    }
    if (newAmount <= 0) {
      delete list[id]
      dispatch({
        type: REMOVE_FROM_CART,
        payload: { list: { ...list }, product }
      })
    }

    dispatch({
      type: TOTAL_VALUES,
      payload: {
        totalAmount: totalAmount + count,
        totalPrice: totalPrice + product.price * count
      }
    })
  }
}

export const removeFromCart = (id) => {
  return (dispatch, getState) => {
    const { list, totalAmount, totalPrice } = getState().cart
    const { amount: rmProdAmount, ...product } = list[id]
    delete list[id]
    dispatch({
      type: REMOVE_FROM_CART,
      payload: { list: { ...list }, product }
    })

    dispatch({
      type: TOTAL_VALUES,
      payload: {
        totalAmount: totalAmount - rmProdAmount,
        totalPrice: totalPrice - product.price * rmProdAmount
      }
    })
  }
}
