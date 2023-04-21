import React from 'react'
import { CategoryCard } from '../../components/CategoryCard'
import { ProductCard } from '../../components/ProductCard'
import { CategoryWrapper, RowWrapper, SliderWrapper } from './styled'

export function Home() {
  return (
    <div className="App">
      <RowWrapper>
        <CategoryWrapper>
          <CategoryCard title="All" />
          <CategoryCard title="Salads" />
          <CategoryCard title="Soup" />
          <CategoryCard title="Dishes" />
          <CategoryCard title="Fruit" />
          <CategoryCard title="Drinks" />
        </CategoryWrapper>
        <SliderWrapper />
      </RowWrapper>
      <ProductCard />
    </div>
  )
}
