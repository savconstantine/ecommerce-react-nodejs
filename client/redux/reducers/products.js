import axios from 'axios'

const GET_PRODUCTS = 'GET_PRODUCTS'

const initialState = {
  list: []
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return { ...state, list: action.payload }
    default:
      return state
  }
}

export const getProductsFromServer = () => {
  return async (dispatch) => {
    const { data } = await axios.get('/api/v1/products')

    dispatch({
      type: GET_PRODUCTS,
      payload: data
    })
  }
}
