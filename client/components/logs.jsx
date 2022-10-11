import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Head from './head'
import Header from './header'

import { getLogs } from '../redux/reducers/log'

const Logs = () => {
  const dispatch = useDispatch()
  const { logs } = useSelector((state) => state.log)

  useEffect(() => {
    dispatch(getLogs())
  }, [])

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
