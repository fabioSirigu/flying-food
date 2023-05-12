import React from 'react'
import { CategorySection } from './CategorySection'
import { ProductList } from './ProductList'
import { RowWrapper } from './styled'
import { TitleSection } from './TitleSection'

export function Catalog() {
  return (
    <div className="App">
      <CategorySection />
      <RowWrapper>
        <TitleSection />
      </RowWrapper>
      <ProductList />
    </div>
  )
}
