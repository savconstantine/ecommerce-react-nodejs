import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import useDebounce from '../../hooks/useDebounce'

import { getProductsWithParams, setLoading } from '../../redux/reducers/products'

import SearchInputSVG from '../../assets/images/search-input.svg'

const ProductsSearch = () => {
  const [searchInput, setSearchInput] = useState('')
  const dispatch = useDispatch()
  const { sort, order } = useSelector((state) => state.products)

  const onChangeHandler = (value) => {
    setSearchInput(value)
    dispatch(setLoading(true))
  }
  useDebounce(
    () => {
      dispatch(getProductsWithParams(sort, order, searchInput))
    },
    1000,
    [searchInput]
  )

  return (
    <div className="inline-flex ">
      <form className="flex items-center">
        <label htmlFor="simple-search" className="sr-only">
          Search
        </label>
        <div className="relative w-full">
          <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <SearchInputSVG className="w-5 h-5 text-gray-400" />
          </div>
          <input
            type="text"
            id="simple-search"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search"
            value={searchInput}
            onChange={(e) => onChangeHandler(e.target.value)}
          />
        </div>
      </form>
    </div>
  )
}

ProductsSearch.propTypes = {}

export default React.memo(ProductsSearch)
