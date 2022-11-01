import React from 'react'
import { Link } from 'react-router-dom'

const Footer = (props) => {
  return (
    <footer className=" mt-auto w-full p-4 bg-white rounded-lg shadow  dark:bg-gray-800">
      <div className="max-w-screen-lg mx-auto md:flex md:items-center md:justify-between md:p-6">
        <span className=" text-sm text-gray-500 sm:text-center dark:text-gray-400">
          <Link to="/" className="hover:underline">
            {props.title}™
          </Link>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <Link to="/logs" href="#" className="mr-4 hover:underline md:mr-6 ">
              Logs
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  )
}

Footer.propTypes = {}

export default React.memo(Footer)
