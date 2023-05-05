import React from 'react'
import { CategorySection } from './CategorySection'
import { ProductList } from './ProductList'
import { RowWrapper, SliderWrapper } from './styled'
import { TitleSection } from './TitleSection'

export function Catalog() {
  return (
    <div className="App">
      <RowWrapper>
        <CategorySection />
        <SliderWrapper />
      </RowWrapper>
      <RowWrapper>
        <TitleSection />
      </RowWrapper>
      <ProductList />
    </div>
  )
}
