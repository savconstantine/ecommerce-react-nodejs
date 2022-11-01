import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import CartMinusSVG from '../../assets/images/cart-minus.svg'
import CartPlusSVG from '../../assets/images/cart-plus.svg'

import { changeItemAmountInCart, removeFromCart } from '../../redux/reducers/cart'

const TableCartRow = ({ id }) => {
  const dispatch = useDispatch()

  const currentCurrency = useSelector((state) => state.settings.currentCurrency)
  const curreciesRates = useSelector((state) => state.settings.currencies)
  const productInCart = useSelector((state) => state.cart.list[id])

  const price = ((productInCart && productInCart.price) * curreciesRates[currentCurrency]).toFixed(
    2
  )
  const totalPrice = (
    (productInCart && productInCart.price) *
    productInCart.amount *
    curreciesRates[currentCurrency]
  ).toFixed(2)

  const productImage = productInCart.image + /\w+(?=\s)/gi.exec(productInCart.title)

  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <td className="p-4 w-32">
        <img src={productImage} alt={productInCart.title} className="product__image" />
      </td>
      <td className="product__title py-4 px-6 font-semibold text-gray-900 dark:text-white">
        {productInCart.title}
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
            <CartMinusSVG className="w-4 h-4" />
          </button>
          <div className="product__amout">{productInCart?.amount}</div>
          <button
            className="inline-flex items-center p-1 text-sm font-medium text-gray-500 bg-white rounded-full border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            type="button"
            onClick={() => dispatch(changeItemAmountInCart(id, +1))}
          >
            <span className="sr-only">Quantity button</span>
            <CartPlusSVG className="w-4 h-4" />
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
