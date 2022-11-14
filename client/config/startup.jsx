import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import PropTypes from 'prop-types'

import { getCurrenciesFromServer } from '../redux/reducers/settings'

const Startup = (props) => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCurrenciesFromServer())
  }, [])

  return props.children
}

Startup.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired
}

export default Startup
