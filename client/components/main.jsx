import React from 'react'
import Head from './head'
import Header from './header'
import Products from './products'

const Main = () => {
  return (
    <>
      <Head title="Main" />
      <Header title="BrandName" />
      <Products />
    </>
  )
}

Main.propTypes = {}

export default React.memo(Main)
