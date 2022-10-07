const LoggingMiddleware = () => {
  // eslint-disable-next-line no-unused-vars
  return (store) => {
    return (next) => {
      return (action) => {
        if (action.type === '@@router/LOCATION_CHANGE') {
          const url = action.payload.location.pathname
          console.log(`navigate to ${url} page`)
        }
        return next(action)
      }
    }
  }
}

export default LoggingMiddleware()
