import axios from 'axios'

const GET_CURRENCIES = '@settings/GET_CURRENCIES'
export const SET_CURRENT_CURRENCY = '@settings/SET_CURRENT_CURRENCY'
const CHECK_CURRENCY_DATE = '@settings/CHECK_RATE_DATE'

const initialState = {
  currencies: { USD: 1 },
  currentCurrency: 'USD',
  currencyDate: 0
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_CURRENCIES:
      return { ...state, currencies: action.payload }
    case SET_CURRENT_CURRENCY:
      return { ...state, currentCurrency: action.payload }
    case CHECK_CURRENCY_DATE:
      return { ...state, currencyDate: action.payload }
    default:
      return state
  }
}

export const getCurrenciesFromServer = () => {
  return async (dispatch, getState) => {
    const { currencyDate } = getState().settings
    if (currencyDate + 1000 * 60 * 60 <= +new Date()) {
      const { data } = await axios.get('/api/v1/currency')

      dispatch({
        type: GET_CURRENCIES,
        payload: data
      })
      dispatch({
        type: CHECK_CURRENCY_DATE,
        payload: +new Date()
      })
    }
  }
}

export const setCurrentCurrency = (currency) => {
  return (dispatch, getState) => {
    const { currentCurrency } = getState().settings
    if (currentCurrency !== currency) {
      dispatch({
        type: SET_CURRENT_CURRENCY,
        payload: currency
      })
    }
  }
}
