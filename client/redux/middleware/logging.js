import axios from 'axios'

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
        const getDate = () => {
          const date = new Date()
          return `${date.getFullYear()}-${
            date.getMonth() + 1
          }-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
        }

        const setLogs = (logStr) => {
          const uniqueId = +new Date()
          axios
            .post('/api/v1/logs', { id: uniqueId, string: logStr })
            .then(({ data }) => data)
            .then((list) =>
              dispatch({
                type: LOG_UPDATE,
                payload: list
              })
            )
            .catch((err) => console.log(err))
        }
        switch (action.type) {
          case SET_CURRENT_CURRENCY:
            {
              const { currentCurrency } = getState().settings
              const newCurrency = action.payload
              const logString = `${getDate()} - Currency changed from ${currentCurrency} to ${newCurrency}`
              setLogs(logString)
            }
            break
          case ADD_TO_CART:
          case INCREASE_AMOUNT: {
            const item = action.payload.product
            const logString = `${getDate()} - Add item ${item.title} to the cart`
            setLogs(logString)
            break
          }
          case REMOVE_FROM_CART:
          case DECREASE_AMOUNT: {
            const item = action.payload.product
            const logString = `${getDate()} - Remove item ${item.title} from the cart`
            setLogs(logString)
            break
          }
          case SET_SORT_INFO: {
            const { sort, order } = action.payload
            const logString = `${getDate()} - Sort products list by ${sort} in ${order} order`
            setLogs(logString)
            break
          }
          case '@@router/LOCATION_CHANGE':
            {
              const url = action.payload.location.pathname
              const logString = `${getDate()} - navigate to ${url} page`
              setLogs(logString)
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
