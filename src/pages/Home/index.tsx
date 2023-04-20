import React from 'react'
import { CategoryCard } from '../../components/CategoryCard'
import { ProductCard } from '../../components/ProductCard'

export function Home() {
  return (
    <div className="App">
      <CategoryCard />
      <ProductCard />
    </div>
  )
}
