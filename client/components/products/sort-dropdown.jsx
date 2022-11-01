import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { sortProducts } from '../../redux/reducers/products'

import DropdownArrow from '../../assets/images/dropdown-arrow.svg'

const ProductsSortDropdown = () => {
  const [isOpen, setIsOpen] = useState(false)
  const dispatch = useDispatch()
  const { sort, order } = useSelector((state) => state.products)

  const handleSort = (selectedSort, selectedOrder) => {
    dispatch(sortProducts(selectedSort, selectedOrder))
    setIsOpen(false)
  }

  return (
    <div className="inline-flex ">
      <button
        id="dropdownDefault"
        data-dropdown-toggle="dropdown"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
        onClick={() => setIsOpen(!isOpen)}
      >
        Sort by: {sort} {order}
        <DropdownArrow className="ml-2 w-4 h-4" />
      </button>

      <div
        id="dropdown"
        className={`absolute mt-10 z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 ${
          isOpen ? `visible` : `hidden`
        } `}
      >
        <ul
          className="py-1 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownDefault"
        >
          <li>
            <button
              type="button"
              className="w-full block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              onClick={() => handleSort('name', 'asc')}
            >
              Name: A-Z
            </button>
          </li>
          <li>
            <button
              type="button"
              className="w-full block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              onClick={() => handleSort('name', 'desc')}
            >
              Name: Z-A
            </button>
          </li>
          <li>
            <button
              type="button"
              className="w-full block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              onClick={() => handleSort('price', 'asc')}
            >
              Price: Low to High
            </button>
          </li>
          <li>
            <button
              type="button"
              className="w-full block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              onClick={() => handleSort('price', 'desc')}
            >
              Price: High to Low
            </button>
          </li>
        </ul>
      </div>
    </div>
  )
}

ProductsSortDropdown.propTypes = {}

export default React.memo(ProductsSortDropdown)
