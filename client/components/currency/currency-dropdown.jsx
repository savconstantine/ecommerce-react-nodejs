import React from 'react'
import { useDispatch } from 'react-redux'
import { setCurrentCurrency } from '../../redux/reducers/settings'
import useComponentVisible from '../../hooks/useComponentVisible'

import DropdownArrow from '../../assets/images/dropdown-arrow.svg'

const CurrencyDropdown = () => {
  const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false)
  const dispatch = useDispatch()

  const currencies = ['USD', 'EUR', 'CAD']

  return (
    <div className="inline-flex " ref={ref}>
      <button
        id="dropdownDefault"
        data-dropdown-toggle="dropdown"
        className="text-white font-medium rounded-lg text-sm  text-center inline-flex items-center "
        type="button"
        onClick={() => setIsComponentVisible(!isComponentVisible)}
      >
        <DropdownArrow className="ml-2 w-4 h-4" />
      </button>

      <div
        id="dropdown"
        className={`absolute mt-6 -ml-4 z-10 w-16 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 ${
          isComponentVisible ? `visible` : `hidden`
        } `}
      >
        <ul
          className="py-1 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownDefault"
        >
          {currencies.map((currency) => (
            <li key={currency}>
              <button
                type="button"
                className="w-full block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                onClick={() => dispatch(setCurrentCurrency(currency))}
              >
                {currency}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

CurrencyDropdown.propTypes = {}

export default React.memo(CurrencyDropdown)
