import React from 'react'
import { useSelector } from 'react-redux'

import TableCartRow from './table-row'

const TableCart = ({ data }) => {
  const { totalAmount, totalPrice } = useSelector((state) => state.cart)
  const { currentCurrency } = useSelector((state) => state.settings)
  const { currencies } = useSelector((state) => state.settings)

  const totalPriceByCurrency = (totalPrice * currencies[currentCurrency]).toFixed(2)
  return (
    <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="py-3 px-6">
              <span className="sr-only">Image</span>
            </th>
            <th scope="col" className="py-3 px-6">
              Product
            </th>
            <th scope="col" className="py-3 px-6">
              Price
            </th>
            <th scope="col" className="py-3 px-6">
              Qty
            </th>
            <th scope="col" className="py-3 px-6">
              Total Price
            </th>
            <th scope="col" className="py-3 px-6">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((id) => (
            <TableCartRow key={id} id={id} />
          ))}
        </tbody>
        <tfoot className=" bg-gray-50 dark:bg-gray-700">
          <tr className="font-semibold text-gray-900 dark:text-white">
            <th scope="row" className="py-3 px-6 text-base">
              Total
            </th>
            <td className="py-3 px-6" />
            <td className="py-3 px-6" />
            <td className="py-3 px-6 text-center">{totalAmount}</td>
            <td className="py-3 px-6" id="total-amount">
              {currentCurrency} {totalPriceByCurrency}
            </td>
            <td className="py-3 px-6" />
          </tr>
        </tfoot>
      </table>
    </div>
  )
}

TableCart.propTypes = {}

export default TableCart
