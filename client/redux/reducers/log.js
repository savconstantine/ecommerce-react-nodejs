import axios from 'axios'

export const LOG_UPDATE = '@log/LOG_UPDATE'

const initialState = {
  logs: []
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case LOG_UPDATE:
      return {
        ...state,
        logs: action.payload
      }
    default:
      return state
  }
}

export const getLogs = () => {
  return (dispatch) => {
    axios('/api/v1/logs')
      .then(({ data }) => data)
      .then((list) =>
        dispatch({
          type: LOG_UPDATE,
          payload: list
        })
      )
      .catch((err) => console.log(err))
  }
}
