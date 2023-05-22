import React, { memo } from 'react'
import { useSelector } from 'react-redux'
import { Loader } from '../../components/Loader'
import { ProductCard } from '../../components/ProductCard'
import { selectProductFilteredByTag } from '../../features/products/selectors'
import { ProductWrapper } from './styled'

export const ProductList = memo(() => {
  const { products, isLoading } = useSelector(selectProductFilteredByTag)

  if (isLoading) return <Loader />

  return (
    <ProductWrapper>
      {products?.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </ProductWrapper>
  )
})
