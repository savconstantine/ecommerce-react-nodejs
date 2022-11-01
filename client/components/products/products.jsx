import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { getProductsFromServer } from '../../redux/reducers/products'
import ProductCard from './product-card'
import Search from './search'
import ProductsSortDropdown from './sort-dropdown'
import CurrencyBtnGroup from '../currency/currency-btn-group'
import Loading from './loading'

const Products = () => {
  const { list: productList, isLoading } = useSelector((state) => state.products)
  const dispatch = useDispatch()
  const productListArray = Object.values(productList)

  useEffect(() => {
    if (productListArray.length === 0) {
      dispatch(getProductsFromServer())
    }
  }, [])

  const renderProducts = () => {
    if (isLoading) {
      return <Loading />
    }
    if (productListArray.length === 0) {
      return <div className="text-center text-2xl text-white">No products found</div>
    }
    return productListArray.map((product) => <ProductCard key={product.id} product={product} />)
  }

  return (
    <>
      <div className="flex max-w-screen-lg mx-auto justify-evenly pt-10 flex-wrap gap-5">
        <Search />
        <CurrencyBtnGroup />
        <ProductsSortDropdown />
      </div>

      <div className="flex flex-wrap gap-2 max-w-screen-lg mx-auto justify-center pt-10">
        {renderProducts()}
      </div>
    </>
  )
}

Products.propTypes = {}

export default Products
