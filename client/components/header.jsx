import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Header = (props) => {
  return (
    <header className="bg-gray-700 sm:px-4 sm:py-3 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
      <div className="max-w-screen-lg mx-auto sm:flex sm:justify-between sm:items-center text-gray-100">
        <div className="inline-flex rounded-md shadow-sm" role="group">
          <button
            type="button"
            className="py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-l-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
          >
            USD
          </button>
          <button
            type="button"
            className="py-2 px-4 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
          >
            EUR
          </button>
          <button
            type="button"
            className="py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-r-md border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
          >
            CAD
          </button>
        </div>
        <Link
          to="/"
          className="flex items-center justify-between px-4 py-3 sm:p-0 text-2xl font-bold"
          id="brand-name"
        >
          {props.title}
        </Link>
        <Link to="/cart" className="flex">
          <svg width="30px" height="30px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
            <polygon
              fill="var(--ci-primary-color, currentColor)"
              points="160 96.039 160 128.039 464 128.039 464 191.384 428.5 304.039 149.932 304.039 109.932 16 16 16 16 48 82.068 48 122.068 336.039 451.968 336.039 496 196.306 496 96.039 160 96.039"
              className="ci-primary"
            />
            <path
              fill="var(--ci-primary-color, currentColor)"
              d="M176.984,368.344a64.073,64.073,0,0,0-64,64h0a64,64,0,0,0,128,0h0A64.072,64.072,0,0,0,176.984,368.344Zm0,96a32,32,0,1,1,32-32A32.038,32.038,0,0,1,176.984,464.344Z"
              className="ci-primary"
            />
            <path
              fill="var(--ci-primary-color, currentColor)"
              d="M400.984,368.344a64.073,64.073,0,0,0-64,64h0a64,64,0,0,0,128,0h0A64.072,64.072,0,0,0,400.984,368.344Zm0,96a32,32,0,1,1,32-32A32.038,32.038,0,0,1,400.984,464.344Z"
              className="ci-primary"
            />
          </svg>
          <span id="order-count" className="ml-2">
            0
          </span>
        </Link>
      </div>
    </header>
  )
}

Header.propTypes = {
  title: PropTypes.string
}

Header.defaultProps = {
  title: 'konstantinsavusia.com'
}

export default React.memo(Header)
