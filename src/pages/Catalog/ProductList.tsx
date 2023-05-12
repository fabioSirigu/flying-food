import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Loader } from '../../components/Loader'
import { ProductCard } from '../../components/ProductCard'
import { productActions } from '../../features/products/reducer'
import { selectProductFilteredByTag } from '../../features/products/selectors'
import { ProductWrapper } from './styled'

export const ProductList = memo(() => {
  const dispatch = useDispatch()
  const products = useSelector(selectProductFilteredByTag)

  useEffect(() => {
    dispatch(productActions.fetchProducts())
  }, [dispatch])

  if (!products.length) return <Loader />

  return (
    <ProductWrapper>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </ProductWrapper>
  )
})
