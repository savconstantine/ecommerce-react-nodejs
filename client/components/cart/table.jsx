import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import TableCartRow from './table-row'

const TableCart = ({ data }) => {
  const [sort, setSort] = useState('name')
  const [order, setOrder] = useState(true)

  const { totalAmount, totalPrice } = useSelector((state) => state.cart)
  const { currentCurrency } = useSelector((state) => state.settings)
  const { currencies } = useSelector((state) => state.settings)

  const totalPriceByCurrency = (totalPrice * currencies[currentCurrency]).toFixed(2)

  const setSortBy = (newSort) => {
    setSort(newSort)
    setOrder(!order)
  }

  const sortProductsList = (products) => {
    switch (sort) {
      case 'price':
        return products.sort((a, b) => {
          return order === true ? a.price - b.price : b.price - a.price
        })
      case 'name':
        return products.sort((a, b) => {
          return order === true ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title)
        })
      default:
        return products
    }
  }

  return (
    <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="py-3 px-6">
              <span className="sr-only">Image</span>
            </th>
            <th
              scope="col"
              className="py-3 px-6 hover:cursor-pointer"
              onClick={() => setSortBy('name')}
            >
              <div className="flex items-center">
                Name
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-1 w-3 h-3"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 320 512"
                >
                  <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" />
                </svg>
              </div>
            </th>
            <th
              scope="col"
              className="py-3 px-6 hover:cursor-pointer"
              onClick={() => setSortBy('price')}
            >
              <div className="flex items-center">
                Price
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-1 w-3 h-3"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 320 512"
                >
                  <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" />
                </svg>
              </div>
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
          {sortProductsList(data).map((product) => (
            <TableCartRow key={product.id} id={product.id} />
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
