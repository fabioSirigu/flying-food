import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Loader } from '../../components/Loader'
import { ProductCard } from '../../components/ProductCard'
import { productActions } from '../../features/products/reducer'
import { selectAllProducts } from '../../features/products/selectors'
import { ProductWrapper } from './styled'

export const ProductList = () => {
  const dispatch = useDispatch()
  const stateProduct = useSelector(selectAllProducts)

  useEffect(() => {
    dispatch(productActions.fetchProducts())
  }, [dispatch])

  if (!stateProduct.length) return <Loader />

  return (
    <ProductWrapper>
      {stateProduct &&
        stateProduct.map((product) => <ProductCard key={product.id} product={product} />)}
    </ProductWrapper>
  )
}
