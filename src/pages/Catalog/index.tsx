import { useEffect, useState } from 'react'
import React from 'react'
import { getProducts } from '../../components/api'
import { ProductDto } from '../../components/api/types'
import { Loader } from '../../components/Loader'
import { ProductCard } from '../../components/ProductCard'
import { CategorySection } from './CategorySection'
import { RowWrapper, SliderWrapper, ProductWrapper } from './styled'
import { TitleSection } from './TitleSection'

export function Catalog() {
  const [products, setProducts] = useState<ProductDto[]>([])

  useEffect(() => {
    getProducts().then((data) => setProducts(data))
  }, [])

  if (!products.length) return <Loader />

  return (
    <div className="App">
      <RowWrapper>
        <CategorySection />
        <SliderWrapper />
      </RowWrapper>
      <RowWrapper>
        <TitleSection />
      </RowWrapper>
      <ProductWrapper>
        {products.length &&
          products.map((product) => <ProductCard key={product.id} product={product} />)}
      </ProductWrapper>
    </div>
  )
}
