import { SET_CURRENT_CURRENCY } from '../reducers/settings'
import { ADD_TO_CART, REMOVE_FROM_CART, INCREASE_AMOUNT, DECREASE_AMOUNT } from '../reducers/cart'
import { SET_SORT_INFO } from '../reducers/products'

import { LOG_UPDATE } from '../reducers/log'

const LoggingMiddleware = () => {
  // eslint-disable-next-line no-unused-vars
  return (store) => {
    const { dispatch, getState } = store
    return (next) => {
      return (action) => {
        switch (action.type) {
          case SET_CURRENT_CURRENCY:
            {
              const { currentCurrency } = getState().settings
              const newCurrency = action.payload
              dispatch({
                type: LOG_UPDATE,
                payload: `Currency changed from ${currentCurrency} to ${newCurrency}`
              })
            }
            break
          case ADD_TO_CART:
          case INCREASE_AMOUNT: {
            const item = action.payload.product
            dispatch({
              type: LOG_UPDATE,
              payload: `Add item ${item.title} to the cart`
            })
            break
          }
          case REMOVE_FROM_CART:
          case DECREASE_AMOUNT: {
            const item = action.payload.product
            dispatch({
              type: LOG_UPDATE,
              payload: `Remove item ${item.title} from the cart`
            })
            break
          }
          case SET_SORT_INFO: {
            const { sort, order } = action.payload
            dispatch({
              type: LOG_UPDATE,
              payload: `Sort products list by ${sort} in ${order} order`
            })
            break
          }
          case '@@router/LOCATION_CHANGE':
            {
              const url = action.payload.location.pathname
              dispatch({
                type: LOG_UPDATE,
                payload: `navigate to ${url} page`
              })
            }
            break
          default:
            return next(action)
        }
        return next(action)
      }
    }
  }
}

export default LoggingMiddleware()
