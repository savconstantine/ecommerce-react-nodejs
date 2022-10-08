import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { getProductsFromServer } from '../redux/reducers/products'
import ProductCard from './product-card'
import ProductsSortDropdown from './products-sort-dropdown'

const Products = () => {
  const productList = useSelector((state) => state.products.list)
  const dispatch = useDispatch()
  const productListArray = Object.values(productList)

  useEffect(() => {
    if (productListArray.length === 0) {
      dispatch(getProductsFromServer())
    }
  }, [])

  return (
    <>
      <div className="flex max-w-screen-lg mx-auto justify-center pt-10">
        <ProductsSortDropdown />
      </div>
      <div className="flex flex-wrap gap-2 max-w-screen-lg mx-auto justify-center pt-10">
        {productListArray.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  )
}

Products.propTypes = {}

export default Products
