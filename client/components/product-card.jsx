import React from 'react'

const ProductCard = ({ product }) => {
  return (
    <div className="">
      <div>{product.id}</div>
      <div>{product.title}</div>
      <div>{product.image}</div>
      <div>{product.price}</div>
      <div>{product.description}</div>
    </div>
  )
}

ProductCard.propTypes = {}

export default ProductCard
