import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import auth from './auth'
import products from './products'
import settings from './settings'
import cart from './cart'
import log from './log'

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    auth,
    settings,
    cart,
    products,
    log
  })

export default createRootReducer
