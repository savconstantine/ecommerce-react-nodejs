import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { changeItemAmountInCart, removeFromCart } from '../../redux/reducers/cart'

const TableCartRow = ({ id }) => {
  const dispatch = useDispatch()

  const product = useSelector((state) => state.products.list[id])
  const currentCurrency = useSelector((state) => state.settings.currentCurrency)
  const curreciesRates = useSelector((state) => state.settings.currencies)
  const productInCart = useSelector((state) => state.cart.list[id])

  const price = ((product && product.price) * curreciesRates[currentCurrency]).toFixed(2)
  const totalPrice = (
    (product && product.price) *
    productInCart.amount *
    curreciesRates[currentCurrency]
  ).toFixed(2)

  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <td className="p-4 w-32">
        <img src={product.image} alt={product.title} className="product__image" />
      </td>
      <td className="product__title py-4 px-6 font-semibold text-gray-900 dark:text-white">
        {product.title}
      </td>
      <td className="product__price py-4 px-6 font-semibold text-gray-900 dark:text-white">
        {currentCurrency} {price}
      </td>
      <td className="py-4 px-6">
        <div className="flex items-center space-x-3">
          <button
            className="inline-flex items-center p-1 text-sm font-medium text-gray-500 bg-white rounded-full border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            type="button"
            onClick={() => dispatch(changeItemAmountInCart(id, -1))}
          >
            <span className="sr-only">Quantity button</span>
            <svg
              className="w-4 h-4"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <div className="product__amout">{productInCart?.amount}</div>
          <button
            className="inline-flex items-center p-1 text-sm font-medium text-gray-500 bg-white rounded-full border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            type="button"
            onClick={() => dispatch(changeItemAmountInCart(id, +1))}
          >
            <span className="sr-only">Quantity button</span>
            <svg
              className="w-4 h-4"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </td>
      <td className="product__total_price py-4 px-6 font-semibold text-gray-900 dark:text-white">
        {currentCurrency} {totalPrice}
      </td>
      <td className="py-4 px-6">
        <button
          type="button"
          className="product__remove font-medium text-red-600 dark:text-red-500 hover:underline"
          onClick={() => dispatch(removeFromCart(id))}
        >
          Remove
        </button>
      </td>
    </tr>
  )
}

TableCartRow.propTypes = {}

export default TableCartRow
