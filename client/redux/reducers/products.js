import axios from 'axios'

const GET_PRODUCTS = 'GET_PRODUCTS'
const SET_LOADING = 'SET_LOADING'
export const SET_SORT_INFO = 'SET_SORT_INFO'

const initialState = {
  list: {},
  sort: 'name',
  order: 'asc',
  search: '',
  isLoading: false
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
      return {
        ...state,
        sort: action.payload.sort,
        order: action.payload.order,
        search: action.payload.search
      }
    case SET_LOADING:
      return {
        ...state,
        isLoading: action.payload
      }
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

export const setLoading = (isLoading) => {
  return (dispatch) => {
    dispatch({
      type: SET_LOADING,
      payload: isLoading
    })
  }
}

export const getProductsWithParams = (sort, order, search = '') => {
  return async (dispatch) => {
    const { data } = await axios.post('/api/v1/products/search', { sort, order, search })

    dispatch({
      type: GET_PRODUCTS,
      payload: data
    })

    dispatch({
      type: SET_SORT_INFO,
      payload: { sort, order, search }
    })

    dispatch({
      type: SET_LOADING,
      payload: false
    })
  }
}
