import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getCurrenciesFromServer, setCurrentCurrency } from '../redux/reducers/settings'

const CurrencyBtnGroup = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCurrenciesFromServer())
  }, [])

  return (
    <div className="inline-flex rounded-md shadow-sm" role="group">
      <button
        type="button"
        className="py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-l-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
        onClick={() => dispatch(setCurrentCurrency('USD'))}
      >
        USD
      </button>
      <button
        type="button"
        className="py-2 px-4 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
        onClick={() => dispatch(setCurrentCurrency('EUR'))}
      >
        EUR
      </button>
      <button
        type="button"
        className="py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-r-md border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
        onClick={() => dispatch(setCurrentCurrency('CAD'))}
      >
        CAD
      </button>
    </div>
  )
}

CurrencyBtnGroup.propTypes = {}

export default React.memo(CurrencyBtnGroup)
