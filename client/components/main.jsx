import React from 'react'
import Head from './head'
import Header from './header'
import Footer from './footer'
import Products from './products'

const Main = () => {
  const title = 'BrandName'
  return (
    <>
      <Head title="Main" />
      <Header title={title} />
      <Products />
      <Footer title={title} />
    </>
  )
}

Main.propTypes = {}

export default React.memo(Main)
