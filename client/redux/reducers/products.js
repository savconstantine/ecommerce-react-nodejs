import axios from 'axios'

const GET_PRODUCTS = 'GET_PRODUCTS'
export const SET_SORT_INFO = 'SET_SORT_INFO'

const initialState = {
  list: {},
  sort: 'name',
  order: 'asc'
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        list: action.payload.reduce((acc, item) => {
          acc[item.id] = item
          return acc
        }, {})
      }
    case SET_SORT_INFO:
      return { ...state, sort: action.payload.sort, order: action.payload.order }
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

export const sortProducts = (sort, order) => {
  return async (dispatch) => {
    const { data } = await axios.post('/api/v1/products/sort', { sort, order })

    dispatch({
      type: GET_PRODUCTS,
      payload: data
    })

    dispatch({
      type: SET_SORT_INFO,
      payload: { sort, order }
    })
  }
}
