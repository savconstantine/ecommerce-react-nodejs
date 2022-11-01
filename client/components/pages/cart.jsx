import React from 'react'
import { useSelector } from 'react-redux'
import Head from '../head'
import Header from '../header'
import TableCart from '../cart/table'

const Cart = () => {
  const productsInCart = useSelector((state) => state.cart.list)

  return (
    <>
      <Head title="Cart" />
      <Header title="Cart" />
      <div className="flex flex-wrap gap-2 max-w-screen-lg mx-auto justify-center pt-10">
        <TableCart data={Object.values(productsInCart)} />
      </div>
    </>
  )
}

Cart.propTypes = {}

export default React.memo(Cart)
