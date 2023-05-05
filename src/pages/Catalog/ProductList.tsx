import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../components/api'
import { ProductDto } from '../../components/api/types'
import { Loader } from '../../components/Loader'
import { ProductCard } from '../../components/ProductCard'
import { ProductsState } from '../../features/products/model'
import { productActions } from '../../features/products/reducer'
import { selectAllProducts } from '../../features/products/selectors'
import { ProductWrapper } from './styled'

export const ProductList = () => {
  const stateProduct = useSelector(selectAllProducts)

  const dispatch = useDispatch()

  useEffect(() => {
    getProducts().then((res) => dispatch(productActions.addProduct(res)))
  }, [dispatch])

  if (!stateProduct.length) return <Loader />

  return (
    <ProductWrapper>
      {stateProduct &&
        stateProduct.map((product) => <ProductCard key={product.id} product={product} />)}
    </ProductWrapper>
  )
}
