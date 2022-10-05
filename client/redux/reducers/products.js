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
    const result = await axios.get('/api/v1/products').then(({ data }) =>
      data.reduce((acc, item) => {
        acc[item.id] = item
        return acc
      }, {})
    )

    dispatch({
      type: GET_PRODUCTS,
      payload: result
    })
  }
}
