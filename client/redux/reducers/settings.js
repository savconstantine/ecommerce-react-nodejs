import axios from 'axios'

const GET_CURRENCIES = '@settings/GET_CURRENCIES'
export const SET_CURRENT_CURRENCY = '@settings/SET_CURRENT_CURRENCY'

const initialState = {
  currencies: { USD: 1 },
  currentCurrency: 'USD'
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_CURRENCIES:
      return { ...state, currencies: action.payload }
    case SET_CURRENT_CURRENCY:
      return { ...state, currentCurrency: action.payload }
    default:
      return state
  }
}

export const getCurrenciesFromServer = () => {
  return async (dispatch) => {
    const { data } = await axios.get('/api/v1/currency')

    dispatch({
      type: GET_CURRENCIES,
      payload: data
    })
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
