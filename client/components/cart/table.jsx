import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { LOG_UPDATE } from '../../redux/reducers/log'

import SortSVG from '../../assets/images/sort.svg'

import TableCartRow from './table-row'

const TableCart = ({ data }) => {
  const [sort, setSort] = useState('name')
  const [order, setOrder] = useState(true)
  const dispatch = useDispatch()

  const { totalAmount, totalPrice } = useSelector((state) => state.cart)
  const { currentCurrency } = useSelector((state) => state.settings)
  const { currencies } = useSelector((state) => state.settings)

  const totalPriceByCurrency = (totalPrice * currencies[currentCurrency]).toFixed(2)

  const setSortBy = (newSort) => {
    setSort(newSort)
    setOrder(!order)
    const getDate = () => {
      const date = new Date()
      return `${date.getFullYear()}-${
        date.getMonth() + 1
      }-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    }
    dispatch({
      type: LOG_UPDATE,
      payload: `${getDate} - Sort products list in cart by ${sort} in ${
        order ? 'asc' : 'desc'
      } order`
    })
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
                <SortSVG className="ml-1 w-3 h-3" />
              </div>
            </th>
            <th
              scope="col"
              className="py-3 px-6 hover:cursor-pointer"
              onClick={() => setSortBy('price')}
            >
              <div className="flex items-center">
                Price
                <SortSVG className="ml-1 w-3 h-3" />
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
