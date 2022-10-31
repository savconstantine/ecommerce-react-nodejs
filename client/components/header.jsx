import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import CurrencyDropdown from './currency/currency-dropdown'
import CurrencyBtnGroup from './currency/currency-btn-group'

const Header = (props) => {
  const { totalAmount, totalPrice } = useSelector((state) => state.cart)
  const { currentCurrency } = useSelector((state) => state.settings)
  const { currencies } = useSelector((state) => state.settings)
  const [menuOpen, setMenuOpen] = useState(false)

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'Logs', path: '/logs' }
  ]

  const price = (totalPrice * currencies[currentCurrency]).toFixed(2)

  return (
    <header className="bg-gray-700 sm:px-4 sm:py-3 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] sticky top-0 z-20 ">
      <nav className="max-w-screen-lg mx-auto  bg-gray-700 px-2 sm:px-4 py-2.5 w-full left-0 text-gray-100">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <Link
            to="/"
            className="flex items-center justify-between px-4 py-3 sm:p-0 text-2xl font-bold flex-1"
            id="brand-name"
          >
            {props.title}
          </Link>

          <div className="flex md:order-2">
            <div className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 pr-5 md:px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 flex">
              <Link to="/cart">
                <svg
                  width="30px"
                  height="30px"
                  viewBox="0 0 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
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
                {totalAmount ? (
                  <span
                    id="order-count"
                    className="-mt-9 ml-0.5 py-1.5 px-2 text-xs leading-3 rounded-full absolute bg-red-600"
                  >
                    {totalAmount}
                  </span>
                ) : null}
              </Link>
              <span id="order-price" className="ml-4 hidden sm:flex justify-center items-center">
                {price} {currentCurrency} <CurrencyDropdown />
              </span>
            </div>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-expanded={menuOpen ? 'true' : 'false'}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          <div
            className={`justify-between items-center w-full md:flex md:w-auto md:order-1 md:mr-6 ${
              menuOpen ? `visible` : `hidden`
            }`}
          >
            <ul className="flex flex-col p-4 mt-4  rounded-lg border  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0  bg-gray-800 md:bg-transparent border-gray-700">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}

              <li className="md:hidden mt-2">
                <CurrencyBtnGroup />
              </li>
            </ul>
          </div>
        </div>
      </nav>
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
