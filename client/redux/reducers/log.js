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
