import React, { memo } from 'react'
import { CategorySection } from './CategorySection'
import { ProductList } from './ProductList'
import { TitleSection } from './TitleSection'

export const Catalog = memo(() => {
  return (
    <div className="App">
      <CategorySection />
      <TitleSection />
      <ProductList />
    </div>
  )
})
