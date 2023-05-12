import React, { memo } from 'react'
import { CategorySection } from './CategorySection'
import { ProductList } from './ProductList'
import { RowWrapper } from './styled'
import { TitleSection } from './TitleSection'

export const Catalog = memo(() => {
  return (
    <div className="App">
      <CategorySection />
      <RowWrapper>
        <TitleSection />
      </RowWrapper>
      <ProductList />
    </div>
  )
})
