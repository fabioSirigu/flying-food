import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../components/api'
import { Loader } from '../../components/Loader'
import { ProductCard } from '../../components/ProductCard'
import { productActions } from '../../features/products/reducer'
import { selectAllProducts } from '../../features/products/selectors'
import { ProductWrapper } from './styled'

export const ProductList = () => {
  const stateProduct = useSelector(selectAllProducts)

  const dispatch = useDispatch()

  useEffect(() => {
    getProducts().then((res) => dispatch(productActions.fetchProductsSuccess(res)))
  }, [dispatch])

  if (!stateProduct.length) return <Loader />

  return (
    <ProductWrapper>
      {stateProduct &&
        stateProduct.map((product) => <ProductCard key={product.id} product={product} />)}
    </ProductWrapper>
  )
}
