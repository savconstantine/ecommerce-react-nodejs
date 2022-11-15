import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentCurrency } from '../../redux/reducers/settings'

const CurrencyBtnGroup = () => {
  const dispatch = useDispatch()

  const { currencies } = useSelector((state) => state.settings)

  return (
    <div className="inline-flex rounded-md shadow-sm md:ml-2" role="group">
      {Object.keys(currencies).map((currency) => (
        <button
          key={currency}
          type="button"
          className="currency-btn-group-button first:currency-btn-group-button--first last:currency-btn-group-button--last"
          onClick={() => dispatch(setCurrentCurrency(currency))}
        >
          {currency}
        </button>
      ))}
    </div>
  )
}

CurrencyBtnGroup.propTypes = {}

export default React.memo(CurrencyBtnGroup)
