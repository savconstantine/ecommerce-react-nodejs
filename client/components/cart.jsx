import React from 'react'
import Head from './head'
import Header from './header'

const Cart = () => {
  return (
    <>
      <Head title="Cart" />
      <Header title="Cart" />
    </>
  )
}

Cart.propTypes = {}

export default React.memo(Cart)
