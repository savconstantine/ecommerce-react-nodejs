import React from 'react'
import { useSelector } from 'react-redux'

import Head from '../head'
import Header from '../header'

const Logs = () => {
  const { logs } = useSelector((state) => state.log)

  return (
    <>
      <Head title="Logs" />
      <Header title="BrandName" />
      {logs.reverse().map((log) => (
        <div key={log?.id} className="text-gray-500 dark:text-gray-400">
          {log?.string}
        </div>
      ))}
    </>
  )
}

Logs.propTypes = {}

export default React.memo(Logs)
