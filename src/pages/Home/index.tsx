import React from 'react'
import { IconButton } from '../../components/Button'
import { CategoryCard } from '../../components/CategoryCard'
import { ProductCard } from '../../components/ProductCard'
import { Select } from '../../components/Select'
import { Text } from '../../components/Text'
import {
  CategoryWrapper,
  RowWrapper,
  SliderWrapper,
  SelectWrapper,
  TextWrapper,
  IconWrapper,
  SelectIconWrapper,
  ProductWrapper
} from './styled'

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
      <RowWrapper>
        <TextWrapper>
          <Text variant="h2" color="text" text="Popular Dishes" />
        </TextWrapper>
        <SelectIconWrapper>
          <SelectWrapper>
            <Select />
            <Select />
            <Select />
          </SelectWrapper>
          <IconWrapper>
            <IconButton rounded iconName="bars" color="background" />
            <IconButton rounded iconName="grid" color="primary" />
          </IconWrapper>
        </SelectIconWrapper>
      </RowWrapper>
      <ProductWrapper>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </ProductWrapper>
    </div>
  )
}
