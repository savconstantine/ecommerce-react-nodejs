import { SET_CURRENT_CURRENCY } from '../reducers/settings'

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
          case '@@router/LOCATION_CHANGE':
            {
              const url = action.payload.location.pathname
              console.log(`navigate to ${url} page`)
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
