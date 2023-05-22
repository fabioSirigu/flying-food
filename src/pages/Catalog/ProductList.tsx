import React, { memo } from 'react'

import { Loader } from '../../components/Loader'
import { ProductCard } from '../../components/ProductCard'
import { useGetProductsQuery } from '../../features/api/endpoints/productsEndpoints'
import { ProductWrapper } from './styled'

export const ProductList = memo(() => {
  const { data: products, isLoading } = useGetProductsQuery()

  if (isLoading) return <Loader />

  return (
    <ProductWrapper>
      {products?.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </ProductWrapper>
  )
})
